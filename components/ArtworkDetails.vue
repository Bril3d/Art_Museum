<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="border-r-2 px-5">
        <div class="relative group">
      <img class="w-full max-h-[600px] object-cover"
        :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`"
        :alt="artwork.thumbnail.alt_text"
      />
      <div class="overlay group-hover:opacity-30"></div>
      <div class="group-hover:opacity-100 opacity-0 w-fit absolute top-[50%] translate-x-[50%] text-white"><pre>{{ artwork.artist_display }}</pre></div>
    </div>
      <span class="text-xs text-gray-400">Display Date: {{
          artwork.date_display
        }}</span>
        <span class="group-hover:opacity-100 block">Dimensions: {{ artwork.dimensions }}</span>
    </div>
    <div class="flex flex-col gap-5">
      <h1 class="font-bold text-2xl">
        {{ artwork.title }}
        <span class="text-xs text-gray-400">Ref: {{
          artwork.main_reference_number
        }}</span>
      </h1>
      <div>
      <p class="text-xl mb-2 text-gray-400">Description:</p>
      <div class="max-h-[220px] overflow-hidden transition-all ease-in" :class="more ? 'max-h-full' : ''">
      <span>{{ artwork.publication_history }}</span>
    </div>
    <span class="text-blue-500 hover:text-blue-600 cursor-pointer" @click="more = true" v-if="!more">See More</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            more:false,
        }
    },
  props: ["artwork"],

};
</script>

<style scoped></style>
