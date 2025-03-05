<script setup>
import {computed, nextTick, onMounted, ref, useSlots, watch} from 'vue';
import Cell from "./Cell.vue";
import mitt from "mitt";
import {titleCase, objectValueFromDotString} from "./utilities.js";
import VueSelect from "vue-multiselect";
import {Tippy} from "vue-tippy";

const slots = useSlots();
const emit = defineEmits(['rendered-records'])
const props = defineProps({
    records: {
        type: Array,
        required: true,
        default() {
            return [];
        }
    },
    columns: {
        type: Array,
        required: true,
        default() {
            return [];
        }
    },
    filterable: {
        type: Boolean,
        default: false,
    },
    filters: {
		type: Array,
		default: null,
	},
    sortable: {
        type: Boolean,
        default: false,
    },
    sortBy: {},
    sortAscending: {
        type: Boolean,
        default: true,
    },
    headerClass: {
        type: String,
        default: ''
    },
    cellClass: {
        type: String,
        default: ''
    },
    oddClass: {
        type: String,
        default: 'bg-white'
    },
    evenClass: {
        type: String,
        default: 'bg-gray-50'
    },
    paginate: {
        type: [Boolean, Object],
        default() {
            return false;
        }
    },
    loading: {
        type: Boolean,
        default() {
            return false;
        }
    },
    events: {
        default() {
            return mitt();
        }
    }
});

let page = null;

if (props.paginate) {
    if (props.paginate.type === 'scroll') {
        page = props.paginate.page;
    }
}

const sort = ref({by: null, ascending: true});
const filters = ref({});
const showColumnFilter = ref({});

const rowRecords = computed(() => {
    if (props.loading === true) {
        return new Array(props.paginate?.count ?? 10).fill({});
    }
    return sortRecords(filterRecords(props.records), sort.value.by, sort.value.ascending);
});

const renderedRecords = ref([]);

watch(rowRecords, (records) => {
	const recordIds = records.map(record => record.id);
	renderedRecords.value = renderedRecords.value.filter(record => recordIds.includes(record.id))
	emit('rendered-records', renderedRecords.value)
})

watch(() => props.columns, (columns) => {
	const columnHeaders = columns.filter(column => column.field !== 'id').map(column => getColumnHeader(column));
	nextTick(() => {
		renderedRecords.value = renderedRecords.value.map(record => {
			let newRecord = {id: record.id}
			columnHeaders.forEach(column => newRecord[column] = record[column])
			return newRecord;
		})
		emit('rendered-records', renderedRecords.value)
	})
})

function updateRenderedRecords(record, column, content) {
	let renderedRecord = renderedRecords.value.find(r => r.id === record.id)
	const columnHeader = getColumnHeader(column)
	if(renderedRecord) {
		renderedRecord[columnHeader] = content;
	} else {
		let renderedRecord = {id: record.id};
		renderedRecord[columnHeader] = content;
		renderedRecords.value.push(renderedRecord)
	}
	emit('rendered-records', renderedRecords.value)
}

function sortRecords(records, by, ascending=true) {
    if(!by) {
        return records;
    }
    const sort = typeof by === 'function' ? by : (a, b) => {
        let aValue = ascending ?  objectValueFromDotString(a, by) : objectValueFromDotString(b, by);
        let bValue = ascending ?  objectValueFromDotString(b, by) : objectValueFromDotString(a, by);
		aValue = aValue === null ? (aValue === 'number' ? 0 : '0') : aValue;
		bValue = bValue === null ? (bValue === 'number' ? 0 : '0') : bValue;
        return typeof a === 'number' ? aValue - bValue : (aValue > bValue ? 1 : (aValue < bValue ? -1 : 0))
    };
    return records.sort(sort)
}

function filterRecords(records) {
	let filteredRecords = records;
	Object.keys(filters.value).forEach(by => {
		const option = filters.value[by];
		if(option.hasOwnProperty('value')) {
			if(typeof option.value === 'function') {
				filteredRecords = filteredRecords.filter(record => option.value(record))
			} else {
				filteredRecords = filteredRecords.filter(record => objectValueFromDotString(record, by) == option.value)
			}
		}
	})
	return filteredRecords;
}

function getFilterOptionsForColumn(column) {
	if(column.filterOptions) {
		if(typeof column.filterOptions === 'function') {
			return column.filterOptions(props.records)
		}
		return column.filterOptions;
	}
	return props.records.map(record => objectValueFromDotString(record, column.field))
		.filter((value, index, self) => self.indexOf(value) === index)
		.map(item => ({label: item ?? '- No Value -', value: item}))
		.sort((a, b) => typeof a.label === 'number' ? a.label - b.label : (a.label > b.label ? 1 : (a.label < b.label ? -1 : 0)))
}

function removeFilter(column) {
	delete(filters.value[column.field]);
}

function hasFilter(column) {
	return filters.value.hasOwnProperty(column.field);
}

onMounted(() => {
    sort.value.by = props.sortBy;
    sort.value.ascending = props.sortAscending;
	if(props.filters) {
		filters.value = props.filters;
	}
})

watch(() => props.sortBy, (sortBy) => sort.value.by = sortBy);
watch(() => props.sortAscending, (sortAscending) => sort.value.ascending = sortAscending);

function openFilterDropdown(columnField) {
	nextTick(() => {
		document.getElementById('filter-select-'+columnField).focus()
	})
}

function getColumnHeader(column) {
	return column.header ? column.header : (column.field ? titleCase( column.field ) : (column.type === 'actions' ? 'Actions' : ''));
}
</script>

<template>
    <div class="flow-root">
        <div>
            <table class="min-w-full border-separate border-spacing-0" :class="`${loading ? 'animate-pulse' : ''}`">
                <thead class="bg-gray-50">
                <tr>
                    <th v-for="(column,index) in columns"
                        :key="column.field ?? index"
                        scope="col"
                        :class="[headerClass, cellClass, (column.class ?? column.type === 'actions' ? 'text-center' : ''), 'px-6 py-3 text-left text-xs whitespace-nowrap font-bold text-gray-600 uppercase tracking-wider sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter']">
                        <div class="inline-flex items-center">
                            {{ getColumnHeader(column) }}
                            <Tippy :content="'Sort '+(sort.by === column.field && sort.ascending ? 'Descending' : 'Ascending')" style="line-height: 0">
								<button v-if="(column.field || column.sortBy) && ((sortable && column.sortable !== false) || column.sortable)"
										@click="sort.ascending = sort.by === (column.sortBy ?? column.field) ? !sort.ascending : true; sort.by = (column.sortBy ?? column.field)"
										class="ml-2 inline-flex justify-center items-center">
									<svg v-if="sort.by === (column.sortBy ?? column.field) && sort.ascending" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
									</svg>
									<svg v-else-if="sort.by === (column.sortBy ?? column.field) && !sort.ascending" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
									</svg>
									<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
										<path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
									</svg>
								</button>
							</Tippy>
							<div v-if="(column.field || column.filterBy) && ((filterable && column.filterable !== false) || column.filterable)" class="flex items-center relative">
								<Tippy :content="filters[column.field] ? 'Filtered: '+filters[column.field].label : 'Filter'" style="line-height: 0">
									<button @click="showColumnFilter[column.field] = true; openFilterDropdown(column.field)" v-if="!showColumnFilter[column.field]"
											class="ml-2 inline-flex justify-center items-center">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4" :class="{'fill-green-500': hasFilter(column)}">
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
										</svg>
									</button>
								</Tippy>
								<div v-if="showColumnFilter[column.field]" class="absolute w-64">
									<VueSelect v-model="filters[column.field]"
											   :id="'filter-select-'+column.field"
											   trackBy="label"
											   label="label"
											   :options="getFilterOptionsForColumn(column)"
											   :multiple="false"
											   :show-labels="false"
											   :allow-empty="false"
											   placeholder="Filter"
											   @close="showColumnFilter[column.field] = false"
											   @update:modelValue="showColumnFilter[column.field] = false"
									></VueSelect>
								</div>
								<Tippy content="Clear Filter" style="line-height: 0">
									<button v-if="hasFilter(column)" @click="removeFilter(column)">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
											<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
										</svg>
									</button>
								</Tippy>
							</div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(record, index) in rowRecords"
                    :key="record.id"
                    :class="index % 2 === 0 ? oddClass : evenClass" class="group">
                    <Cell v-if="!record.hasOwnProperty('__rowType')"
                          v-for="(column, index) in columns"
                          :key="column.field ?? index"
                          :column-index="index"
                          :column="column"
                          :events="events"
                          :record="record"
                          :cell-class="cellClass"
                          :loading="loading"
                          @rendered="(content) => updateRenderedRecords(record, column, content)"/>
                </tr>
                </tbody>
            </table>
            <div class="flex sm:justify-center bg-gray-100 w-full"
                 v-if="rowRecords.length === 0 && !loading">
                <span v-if="!slots['no-records']" class="pl-4 sm:px-0 py-4">No Records</span>
                <slot name="no-records"/>
            </div>
            <button
                @click="page"
                class="flex sm:justify-center bg-gray-200 w-full"
                style="grid-column: 1 / -1;"
                v-if="paginate && paginate.type ==='scroll' && rowRecords.length < paginate.total  && !loading">
                <span class="pl-4 sm:px-0 py-4">See More</span>
            </button>
        </div>
    </div>
</template>

<style src="../multiselect.css"></style>