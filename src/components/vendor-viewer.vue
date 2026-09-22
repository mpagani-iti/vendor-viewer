<!-- eslint-disable -- interview exercise -->
<template>
  <section>
    <h1 class="mb-4 text-2xl font-semibold text-slate-900">Vendors</h1>
    <input
      v-model="query"
      type="search"
      placeholder="Filter vendors…"
      class="mb-4 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none" />
    <div v-if="loading" class="size-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700"></div>
    <div v-else>
      <div
        tabindex="0"
        class="mb-4 inline-block cursor-pointer rounded border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
        @click="loadVendors">
        Refresh
      </div>
      <div v-if="vendors.length" class="divide-y divide-slate-200 border-y border-slate-200">
        <div v-for="(vendor, index) in vendors" :key="index" class="flex items-center gap-3 py-2.5">
          <span class="size-2.5 shrink-0 rounded-full" :class="statusColors[vendor.status]"></span>
          <span class="font-medium text-slate-900">{{ vendor.name }}</span>
          <span class="ml-auto text-sm text-slate-500">{{ vendor.city }}</span>
        </div>
      </div>
      <p v-else class="text-slate-500">No vendors match this filter.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VENDORS, fetchVendors } from '../../data/vendors.mock'
import type { VendorStatus } from '../../data/vendors.mock'

const statusColors: Record<VendorStatus, string> = {
  active: 'bg-green-600',
  pending: 'bg-amber-500',
  suspended: 'bg-red-600',
}

const query = ref('')
const vendors = ref(VENDORS)
const loading = ref(false)

function loadVendors() {
  loading.value = true
  fetchVendors(query.value)
    .then((result) => {
      vendors.value = result
      loading.value = false
    })
    .catch((error) => {
      console.error(error)
      vendors.value = []
      loading.value = false
    })
}

watch(query, loadVendors, { immediate: true })
</script>
