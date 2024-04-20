<script setup>
import {createApp, h, ref, onMounted, watch, nextTick} from 'vue';
import GridToggle from "./GridToggle.vue";
import GridLink from "./GridLink.vue";
import GridButton from "./GridButton.vue";
import GridActions from "./GridActions.vue";
import GridInput from "./GridInput.vue";
import {formatDate, formatMoney, formatNumber} from "./utilities.js";

const props = defineProps({
    columnIndex: {
        type: Number,
        required: true,
    },
    column: {
        default() {
            return {
                header: '--',
                content: () => '--',
            };
        }
    },
    record: {
        default() {
            return {};
        }
    },
    cellClass: {
        type: String,
        default: ''
    },
    loading: {
        required: true,
        default() {
            return false;
        }
    },
    events: {},
});
let cell = ref(null);

let content = ref(null);

const cellApp = ref(null);

onMounted(() => {
    renderCellContent();
});

/**
 * Renders content of the cell.  Checks to see whether the content is a function or object with another
 * vue component.
 * */
function renderCellContent() {

    if(props.column.hasOwnProperty('content') && typeof props.column.content === 'function') {
        return content.value = props.column.content(props.record);
    }

    switch(props.column.type) {
        case 'actions':
            cellApp.value = createApp({
                render: () => h(GridActions, {
                    actions: props.column.actions,
                    confirm: props.column.hasOwnProperty('confirm') ? props.column.confirm : true,
                    columnIndex: props.columnIndex,
                    record: props.record,
                    events: props.column.events ? props.column.events : props.events,
                    class: props.column.actionsClass,
                })
            });
            return cellApp.value.mount(cell.value);
        case 'button':
            cellApp.value = createApp({
                render: () => h(GridButton, {
                    columnIndex: props.columnIndex,
                    record: props.record,
                    field: props.column.field,
                    events: props.column.events ? props.column.events : props.events,
                    class: props.column.buttonClass,
                    label: props.column.label,
                })
            });
            return cellApp.value.mount(cell.value);
        case 'toggle':
            cellApp.value = createApp({
                render: () => h(GridToggle, {
                    columnIndex: props.columnIndex,
                    record: props.record,
                    field: props.column.field,
                    events: props.column.events ? props.column.events : props.events,
                })
            });
            return cellApp.value.mount(cell.value);
        case 'input':
            cellApp.value = createApp({
                render: () => h(GridInput, {
                    columnIndex: props.columnIndex,
                    record: props.record,
                    field: props.column.field,
                    input: props.column.input,
                    events: props.column.events ? props.column.events : props.events,
                })
            });
            return cellApp.value.mount(cell.value);
        case 'link':
        case 'download':
            let href = '';
            if(props.column.href) {
                href = props.column.href;
                if( typeof props.column.href === 'function') {
                    href = props.column.href(props.record);
                }
            } else if(props.column.hasOwnProperty('field')) {
                href = getRecordValueForField(props.column.field);
            }
            let label = props.column.label;
            if(props.column.label && typeof props.column.label === 'function') {
                label = props.column.label(props.record);
            }
            cellApp.value = createApp({
                render: () => h(GridLink, {
                    href: href,
                    label: label,
                    type: props.column.type,
                    target: props.column.target,
                })
            });
            return cellApp.value.mount(cell.value);
        case 'modelLink':
            cellApp.value = createApp({
                render: () => h(GridLink, {
                    href: `${props.column.modelPath}/${props.column.modelIdField ? getRecordValueForField(props.column.modelIdField) : props.record.id}`+(props.column.modelPathSuffix ? `/${props.column.modelPathSuffix}` : ''),
                    label: getRecordValueForField(props.column.field),
                })
            });
            return cellApp.value.mount(cell.value);
        case 'date':
            return content.value = formatDate(getRecordValueForField(props.column.field))
        case 'number':
            return content.value = formatNumber(getRecordValueForField(props.column.field) ?? 0)
        case 'money':
            return content.value = formatMoney(getRecordValueForField(props.column.field) ?? 0)
    }

    if(props.column.hasOwnProperty('field')) {
        return content.value = getRecordValueForField(props.column.field);
    }

    const componentProps = {
        columnIndex: props.columnIndex,
        record: props.record,
    };

    if(props.events) {
        componentProps.events = props.events;
    }

    for(let prop in props.column.content.props) {
        if(typeof props.column.content.props[prop] === 'function') {
            componentProps[prop] = props.column.content.props[prop](props.record);
        } else {
            componentProps[prop] = props.column.content.props[prop];
        }
    }
    cellApp.value = createApp({
        props: props.column.props,
        render: () => h(props.column.content.component, componentProps)
    });

    cellApp.value.mount(cell.value);

}

function getRecordValueForField(field) {
    let fieldKeys = field.indexOf('.') > -1 ? field.split('.') : [field];
    let recordValue = props.record[fieldKeys.shift()];
    for(let i=0; i<fieldKeys.length; i++) {
        recordValue = recordValue && fieldKeys[i] ? recordValue[fieldKeys[i]] ?? null : null;
    }
    return recordValue;
}

watch(() => props.record, () => {
    if(cellApp.value) {
        cellApp.value.unmount();
    }
    nextTick(renderCellContent);
}, {deep: true});
</script>

<template>
    <td v-if="loading" :class="[column.class, cellClass, 'px-6 py-4 whitespace-nowrap text-sm text-gray-500']">
        <div class="h-8 bg-slate-400 rounded"></div>
    </td>
    <td v-else :class="[column.class, cellClass, 'px-6 py-4 whitespace-nowrap text-sm text-gray-500']" ref="cell"><div v-html="content"></div></td>
</template>
