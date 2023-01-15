<template>
  <div>
    <FlexTitle>ARTWORKS</FlexTitle>
    <div v-if="pending">Loading...</div>
    <div class="flex flex-wrap justify-center gap-5" v-else>
      <ArtCard
        v-for="artwork in artworks.data"
        :key="artwork.id"
        :artwork="artwork"
        @click="selectArtwork(artwork.id)"
      />
    </div>
    <div class="flex justify-center mt-10">
      <div
        class="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors ease-in text-white rounded-full cursor-pointer w-fit"
        @click="loadMore"
      >
        Next
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
function selectArtwork(artworkId) {
  router.push({ path: `/artworks/${artworkId}` });
}

const { pending, data: artworks } = await useLazyFetch(
  "https://api.artic.edu/api/v1/artworks?page=1&limit=30"
);
async function loadMore() {
  const { data: next } = await useLazyFetch(artworks.value.pagination.next_url);
  artworks.value.data.push(...next.value.data);
  artworks.value.pagination = next.value.pagination;
}
</script>

<style scoped></style>
