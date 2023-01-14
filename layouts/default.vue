<template>
  <header class="shadow-sm min-h-[40px] flex justify-center">
    <ul class="flex gap-5 items-center">
      <li
        class="transition-colors ease-in px-2 py-3 cursor-pointer text-center hover:bg-gray-200 min-w-[200px]"
      >
        <NuxtLink to="/">Artworks</NuxtLink>
      </li>
      <li
        class="transition-colors ease-in px-2 py-3 cursor-pointer text-center hover:bg-gray-200 min-w-[200px]"
      >
        <NuxtLink to="/iiif">IIIF</NuxtLink>
      </li>
    </ul>
  </header>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.router-link-exact-active {
  color: #10b981;
}
</style>
