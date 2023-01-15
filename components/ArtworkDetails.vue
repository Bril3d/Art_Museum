<template>
  <div class="grid sm:grid-cols-2 gap-5">
    <div class="sm:border-r-2 px-5">
      <div class="relative group">
        <img
          class="w-full max-h-[600px] object-cover border"
          :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`"
          :alt="artwork.thumbnail.alt_text"
        />
        <div class="overlay group-hover:opacity-30"></div>
        <div
          class="group-hover:opacity-100 opacity-0 w-fit absolute top-[50%] translate-x-[50%] text-white"
        >
          <pre>{{ artwork.artist_display }}</pre>
        </div>
      </div>
      <span class="text-xs text-gray-400"
        >Display Date: {{ artwork.date_display }}</span
      >
      <div class="grid grid-cols-2 mt-4 border-y-2 py-2">
        <p class="font-medium">Artist:</p>
        <p>{{ artwork.artist_title }}</p>
      </div>
      <div class="grid grid-cols-2 border-b-2 py-2">
        <p class="font-medium">Place:</p>
        <p>{{ artwork.place_of_origin }}</p>
      </div>
      <div class="grid grid-cols-2 border-b-2 py-2">
        <p class="font-medium">Date:</p>
        <p>{{ artwork.date_start }}-{{ artwork.date_end }}</p>
      </div>
      <div class="grid grid-cols-2 border-b-2 py-2">
        <p class="font-medium">Dimensions:</p>
        <p>{{ artwork.dimensions }}</p>
      </div>
      <div class="grid grid-cols-2 border-b-2 py-2">
        <p class="font-medium">Credit Line:</p>
        <p>{{ artwork.credit_line }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-5 px-5 sm:px-0">
      <h1 class="font-bold text-2xl">
        {{ artwork.title }}
        <span class="text-xs text-gray-400"
          >Ref: {{ artwork.main_reference_number }}</span
        >
      </h1>
      <div>
        <p class="text-xl mb-2 text-gray-400">Description:</p>
        <div
          class="max-h-[220px] overflow-hidden transition-all ease-in"
          :class="more ? 'max-h-full' : ''"
        >
          <span>{{ artwork.publication_history }}</span>
        </div>
        <span
          class="text-blue-500 hover:text-blue-600 cursor-pointer"
          @click="more = true"
          v-if="!more && artwork.publication_history"
          >See More</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more: false,
    };
  },
  props: ["artwork"],
};
</script>

<style scoped></style>
