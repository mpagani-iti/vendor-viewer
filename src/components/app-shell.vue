<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" class="text-lg font-semibold tracking-tight text-slate-950">Procurement Portal</a>
        <nav aria-label="Primary navigation">
          <a
            href="/"
            aria-current="page"
            class="rounded px-2 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
            Vendors
          </a>
        </nav>
        <span class="ml-auto text-sm text-slate-500">Vendor workspace</span>
      </div>
    </header>

    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div class="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
        <slot />
      </div>
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8">(c) ExampleTech LLC</div>
    </footer>
  </div>
</template>
