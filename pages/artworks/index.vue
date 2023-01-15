<template>
  <div>
    <FlexTitle>ARTWORKS</FlexTitle>
    <div v-if="pending" class="flex flex-wrap justify-center gap-5">
    <AnimatedPlaceholder class="w-[248px] h-[256px] shadow-sm rounded-md" v-for="index in 30" />
    </div>
    <div class="flex flex-wrap justify-center gap-5" v-else>
      <ArtCard
        v-for="artwork in artworks.data"
        :key="artwork.id"
        :artwork="artwork"
        @click="selectArtwork(artwork)"
      />
    </div>
    <div class="flex justify-center mt-10">
      <div v-if="artworks.pagination.next_url"
        class="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors ease-in text-white rounded-full cursor-pointer w-fit"
        @click="loadMore($event)"
      >
        Load More
      </div>
    </div>
  </div>
</template>

<script setup>
const { pending, data: artworks } = await useLazyFetch(
  "https://api.artic.edu/api/v1/artworks?page=1&limit=30"
);
const router = useRouter();
function selectArtwork(artwork) {
  router.push({ path: `artworks/${artwork.id}` });
}
async function loadMore(e) {
  e.target.textContent = 'Loading...';
  const { data: next } = await useFetch(artworks.value.pagination.next_url);
  e.target.textContent = 'Load More';
  artworks.value.data.push(...next.value.data);
  artworks.value.pagination = next.value.pagination;
  
}
</script>

<style scoped>

</style>