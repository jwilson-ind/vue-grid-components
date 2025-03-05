<script setup>
import { Link } from '@inertiajs/vue3';
import { ArrowDownCircleIcon } from "@heroicons/vue/24/solid/index.js";

defineProps({
    type: {
        type: String,
    },
    label: {
        type: [String, Number],
    },
    href: {
        type: String,
    },
    target: {
        type: String,
    },
})
</script>

<template>
    <a v-if="type === 'download'" class="whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500" :href="href" :target="target ?? '_blank'">
        <ArrowDownCircleIcon class="w-5 inline-block text-secondary align-middle"/> <span v-html="label"></span>
    </a>
	<a v-if="target" class="whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500" :href="href" :target="target">
		<span v-html="label"></span>
	</a>
    <Link v-else class="whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500" :href="href">
        <span v-html="label"></span>
    </Link>
</template>
