export type VendorStatus = 'active' | 'suspended' | 'pending'

export type Vendor = {
  id: string
  name: string
  city: string
  status: VendorStatus
}

export const VENDORS: Vendor[] = [
  { id: 'v-01', name: 'Ridgeline Paving', city: 'Fort Calder', status: 'active' },
  { id: 'v-02', name: 'Northgate Aggregates', city: 'Marrow Bend', status: 'active' },
  { id: 'v-03', name: 'Sentinel Traffic Control', city: 'Kestrel Flats', status: 'suspended' },
  { id: 'v-04', name: 'Halcyon Surveying Group', city: 'West Anwell', status: 'active' },
  { id: 'v-05', name: 'Ironvale Precast', city: 'Dunmoor', status: 'pending' },
  { id: 'v-06', name: 'Clearwater Earthworks', city: 'Pelican Hollow', status: 'active' },
  { id: 'v-07', name: 'Tallgrass Bridge Services', city: 'Amberton', status: 'suspended' },
  { id: 'v-08', name: 'Quarry Point Materials', city: 'Stonebridge Hills', status: 'active' },
  { id: 'v-09', name: 'Beacon Line Striping', city: 'New Havilah', status: 'pending' },
  { id: 'v-10', name: 'Cedar Fork Utilities', city: 'Larkspur Crossing', status: 'active' },
]

export function fetchVendors(query = ''): Promise<Vendor[]> {
  const delay = 600 + Math.random() * 300
  const offline = window.location.search.includes('fail=1')
  const term = query.trim().toLowerCase()
  const matches = term ? VENDORS.filter((vendor) => vendor.name.toLowerCase().includes(term)) : VENDORS.slice()

  return new Promise((resolve, reject) => {
    setTimeout(() => (offline ? reject(new Error('Network error')) : resolve(matches)), delay)
  })
}
