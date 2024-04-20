<script setup>
import {computed} from 'vue';
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/vue/24/outline/index.js";

const props = defineProps({
    offset: {
        type: Number,
        required: true,
    },
    limit: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['paginate']);

const totalPages = computed(() => Math.ceil(props.total / props.limit));
const currentPage = computed(() => Math.floor(props.offset / props.limit) + 1);

const paginationRange = computed(() => {
    const pages = [];
    const range = 2;
    let start = currentPage.value - range;
    let end = currentPage.value + range;

    if (start < 1) {
        start = 1;
        end = start + range * 2;
    }

    if (end > totalPages.value) {
        end = totalPages.value;
        start = totalPages.value - range * 2;
    }

    for (let page = start; page <= end; page++) {
        if (page > 0 && page <= totalPages.value) {
            pages.push(page);
        }
    }

    return pages;
});


const showLeadingEllipsis = computed(() => paginationRange.value[0] > 1);
const showTrailingEllipsis = computed(() => {
    const lastPageInRange = paginationRange.value[paginationRange.value.length - 1];
    return lastPageInRange < totalPages.value;
});

const updatePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        const newOffset = (page - 1) * props.limit;
        emit('paginate', newOffset);
    }
};

</script>

<template>
    <div class="pagination">

        <button class="page-button"
                @click="updatePage(1)"
                :disabled="currentPage === 1">
            <span class="sr-only">First page</span>
            <ChevronDoubleLeftIcon class="h-5 w-5" aria-hidden="true"/>
        </button>

        <button class="page-button"
                @click="updatePage(currentPage - 1)"
                :disabled="currentPage === 1">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true"/>
        </button>

        <span v-if="showLeadingEllipsis">...</span>

        <button class="page-button"
                :class="currentPage === page ? 'active' : ''"
                v-for="page in paginationRange"
                :key="page"
                @click="updatePage(page)"
                :disabled="currentPage === page">
            {{ page }}
        </button>

        <span v-if="showTrailingEllipsis">...</span>

        <button class="page-button"
                @click="updatePage(currentPage + 1)"
                :disabled="currentPage === totalPages">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true"/>
        </button>

        <button class="page-button"
                @click="updatePage(totalPages)"
                :disabled="currentPage === totalPages">
            <span class="sr-only">Last page</span>
            <ChevronDoubleRightIcon class="h-5 w-5" aria-hidden="true"/>
        </button>
    </div>
</template>

<style lang="postcss">
.pagination {
    @apply flex items-center;

    .page-button {
        @apply px-3 py-1 disabled:text-gray-300;

        &.active {
            @apply bg-slate-600 text-white opacity-100;
        }
    }
}
</style>