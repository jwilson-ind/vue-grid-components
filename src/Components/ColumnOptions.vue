<script setup>
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";
import {XMarkIcon} from "@heroicons/vue/24/outline/index.js";
import {computed, ref, watch} from "vue";
import {titleCase} from "./utilities.js";

const emit = defineEmits(['close']);
const props = defineProps({
	gridId: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		default: 'Selected Column Options',
	},
	show: {
		type: Boolean,
		default: false,
	},
	columns: {
		type: Array,
		default() {
			return []
		}
	}
})

const selectableColumns = computed(() => {
	return props.columns.filter(column => !!column.field).map(column => {
		return {id: column.field, name: column.header ?? titleCase(column.field)}
	})
})

const selectedColumns = defineModel();

watch(selectedColumns, (columns) => {
	localStorage.setItem(props.gridId+'-selected-columns', JSON.stringify(columns))
}, {deep: true})


const showColumnFilters = ref(false);
watch(() => props.show, (value) => {
	showColumnFilters.value = value;
})
watch(showColumnFilters, (value) => {
	if(value === false) {
		emit('close')
	}
})
</script>

<template>
	<div>
		<TransitionRoot as="template" :show="showColumnFilters">
			<Dialog as="div" class="relative z-50" @close="showColumnFilters = false">
				<div class="fixed inset-0" />
				<div class="fixed inset-0 overflow-hidden">
					<div class="absolute inset-0 overflow-hidden">
						<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
								<DialogPanel class="pointer-events-auto w-screen max-w-md">
									<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div class="px-4 sm:px-6">
											<div class="flex items-center justify-between">
												<DialogTitle class="text-lg font-semibold leading-6 text-gray-900">{{title}}</DialogTitle>
												<div class="ml-3 flex h-7 items-center">
													<button type="button" class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="showColumnFilters = false">
														<span class="absolute -inset-2.5" />
														<span class="sr-only">Close panel</span>
														<XMarkIcon class="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>
										</div>
										<div class="relative mt-6 flex-1 px-4 sm:px-6">
											<div class="flex-1 grid grid-cols-1 items-center divide-y">
												<label :for="gridId+'_list_item_'+index" class="checkbox-label my-0 py-3" v-for="(option, index) in selectableColumns">
													<input :id="gridId+'_list_item_'+index" class="input-checkbox" type="checkbox" :value="option.id" v-model="selectedColumns">
													<span class="cursor-pointer ml-2 align-middle">{{ option.name }}</span>
												</label>
											</div>
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</div>
			</Dialog>
		</TransitionRoot>
	</div>
</template>
