<template>
  <div
    class="shadow-sm rounded-md flex flex-col max-w-[250px] px-6 from-gray-50 to-gray-300 bg-gradient-to-b cursor-pointer"
  >
    <div class="mx-auto">
      <img
        class="h-[200px] w-[200px] object-cover"
        :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`"
        :alt="artwork.thumbnail?.alt_text"
      />
    </div>
    <div
      class="text-center text-ellipsis whitespace-nowrap overflow-hidden py-4"
      :title="artwork.title"
    >
      {{ artwork.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["artwork"],
};
</script>

<style scoped></style>
