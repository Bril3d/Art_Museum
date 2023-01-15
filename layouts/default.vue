<template>
  <header class="shadow-sm min-h-[40px] flex justify-center">
    <ul class="flex gap-5 items-center">
      <NuxtLink to="/">
      <li
        class="transition-colors ease-in px-2 py-3 cursor-pointer text-center hover:bg-gray-200 min-w-[200px]"
      >
        Artworks
      </li>
    </NuxtLink>
    <NuxtLink to="/iiif">
      <li
        class="transition-colors ease-in px-2 py-3 cursor-pointer text-center hover:bg-gray-200 min-w-[200px]"
      >
        IIIF
      </li>
    </NuxtLink>
    </ul>
  </header>
  <div>
    <div class="py-10 md:px-16 px-0">
    <slot />
  </div>
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
