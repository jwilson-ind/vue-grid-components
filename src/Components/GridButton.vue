<script setup>
import mitt from "mitt";

defineProps({
    label: {
        type: String,
        default() {
            return 'Submit'
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
</script>

<template>
    <button class="btn-primary" @click="events.emit('clicked', {columnIndex, record})"><span v-html="label"></span></button>
</template>
