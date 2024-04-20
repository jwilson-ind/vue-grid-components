<script setup>
import {computed, useSlots} from 'vue';
import Cell from "./Cell.vue";
import mitt from "mitt";

const slots = useSlots();
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

const rowRecords = computed(() => {
    if (props.loading === true) {
        return new Array(props.paginate?.count ?? 10).fill({});
    }
    return props.records;
});
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
                        :class="[headerClass, cellClass, column.class, 'px-6 py-3 text-left text-xs whitespace-nowrap font-bold text-gray-600 uppercase tracking-wider sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter']">
                        {{ column.header ? column.header : (column.field ? column.field.toTitleCase() : '') }}
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
                          :loading="loading"/>
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
