<script setup>
import mitt from "mitt";
import {computed} from "vue";
import {titleCase} from "./utilities.js";

const props = defineProps({
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
        required: true,
    },
    input: {
        type: Object,
        required: true,
    },
    events: {
        type: Object,
        default() {
            return mitt();
        },
    },
});

const inputId = computed(() => {
    return props.input.id ? props.input.id : props.field+'_'+Math.random().toString(36).slice(2);
});
const inputErrors = computed(() => {
    return props.record.errors && props.record.errors[props.field] ? props.record.errors[props.field] : [];
});

function updated(value) {
    props.events.emit('updated-record', {
        columnIndex: props.columnIndex,
        field: props.field,
        value: value,
    })
}

</script>

<template>
    <select v-if="input.select"
            :id="inputId"
            class="input-select"
            v-model="record[field]"
            :disabled="input.disabled"
            @update:modelValue="updated">
        <option :value="null">select...</option>
        <option v-for="option in input.select.options" :value="option[input.select.field ?? 'id'] ?? option">{{option[input.select.label ?? 'name'] ?? option }}</option>
    </select>
    <textarea v-else-if="input.type === 'textarea'"
              :id="inputId"
              class="input-textarea"
              :rows="input.rows ?? '10'"
              v-model="record[field]"
              :placeholder="input.placeholder ?? titleCase(props.field)"
              :disabled="input.disabled"
              @update:modelValue="updated"></textarea>
    <input v-else :id="inputId"
           :class="[input.type === 'checkbox' ? 'input-checkbox' : 'input-text']"
           :type="input.type"
           v-model="record[field]"
           :placeholder="input.placeholder ?? titleCase(props.field)"
           :autocomplete="input.autocomplete"
           :required="input.required"
           :disabled="input.disabled"
           @update:modelValue="updated"/>
    <div v-if="inputErrors.length">
        <p v-for="error in inputErrors" class="text-sm text-red-600">{{ error }}</p>
    </div>
</template>
