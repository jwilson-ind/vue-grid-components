<script setup>
import {ref, watch} from 'vue';
import {Switch} from '@headlessui/vue';
import mitt from "mitt";

const props = defineProps({
    label: {
        type: String,
        default() {
            return 'toggle'
        }
    },
    record: {
        type: Object,
        required: true,
    },
    columnIndex: {
        type: Number,
        required: true,
    },
    field: {
        type: String,
    },
    events: {
        type: Object,
        default() {
            return mitt();
        },
    }
})
const toggled = ref(props.field ? getRecordValueForField(props.field) : false);

watch(toggled, (value) => {
    if(props.field) {
        setRecordValueForField(props.field, value)
    }
    props.events.emit('grid-toggle', {
        columnIndex: props.columnIndex,
        record: props.record,
        value: value,
    });
})

function getRecordValueForField(field) {
    let fieldKeys = field.indexOf('.') > -1 ? field.split('.') : [field];
    let recordValue = props.record[fieldKeys.shift()];
    for(let i=0; i<fieldKeys.length; i++) {
        recordValue = recordValue && fieldKeys[i] ? recordValue[fieldKeys[i]] ?? null : null;
    }
    return recordValue;
}

function setRecordValueForField(field, value) {
    let fieldKeys = field.indexOf('.') > -1 ? field.split('.') : [field];
    switch (fieldKeys.length) {
        case 1:
            props.record[field] = value;
            break;
        case 2:
            props.record[fieldKeys[0]][fieldKeys[1]] = value;
            break;
        case 3:
            props.record[fieldKeys[0]][fieldKeys[1]][fieldKeys[3]] = value;
            break;
    }
}
</script>

<template>
    <Switch v-model="toggled"
            :class="[toggled ? 'bg-blue-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500']">
        <span class="sr-only">{{ label }}</span>
        <span
            :class="[toggled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']">
      <span
          :class="[toggled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']"
          aria-hidden="true">
      </span>
      <span
          :class="[toggled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']"
          aria-hidden="true">
      </span>
    </span>
    </Switch>
</template>
