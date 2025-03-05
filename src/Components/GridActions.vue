<script setup>
import {computed, ref} from "vue";
import mitt from "mitt";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/outline/index.js";

import DeleteConfirmModal from "./DeleteConfirmModal.vue";
import { Tippy } from "vue-tippy";

const props = defineProps({
    events: {
        type: Object,
        default() {
            return mitt();
        },
    },
    actions: {
        type: Array,
        default: ['view', 'edit', 'delete']
    },
    confirm: {
        type: Boolean,
        default: true,
    },
    record: {
        type: Object,
        required: true,
    },
    columnIndex: {
        type: Number,
        required: true,
    },
})

const confirmDelete = ref(false);

const defaultActions = [
    {name: 'view', tip: 'View', icon: EyeIcon, class: 'btn-blue text-white px-1 py-1 rounded-full'},
    {name: 'edit', tip: 'Edit', icon: PencilIcon, class: 'btn-green text-white px-1 py-1 rounded-full'},
    {name: 'delete', tip: 'Delete', icon: TrashIcon, class: 'btn-red text-white px-1 py-1 rounded-full'},
];

const processedActions = computed(() => {
    return props.actions.map(action => {
        let defaultAction = defaultActions.find(a => a.name === action);
        if(defaultAction) {
            return defaultAction;
        }
        defaultAction = defaultActions.find(a => a.name === action.name);
        if(defaultAction) {
            return {...defaultAction, ...action}
        }
        return action;
    })
})

function allowsAction(actionName) {
    const policyAction = actionName === 'edit' ? 'update' : actionName;
    return props.record.policy?.can?.hasOwnProperty(policyAction) ? props.record.policy.can[policyAction] : true;
}

</script>

<template>
    <div class="flex items-center space-x-2 justify-center">
        <Tippy v-for="action in processedActions" :content="action.tip ?? action.name" class="leading-none">
            <button v-if="allowsAction(action.name)" :class="action.class ?? (action.iconClass ? '' : 'bg-gray-200 px-1 py-1 rounded-full')"
                    @click.stop="action.name === 'delete' && confirm ? confirmDelete = true : events.emit(action.name, {columnIndex, record})">
                <component :is="action.icon" :class="action.iconClass ?? 'h-4 w-4'"/>
            </button>
        </Tippy>
        <DeleteConfirmModal :open="confirmDelete" @destroy="events.emit('delete', {columnIndex, record}); confirmDelete=false" @close="confirmDelete=false"/>
    </div>
</template>
