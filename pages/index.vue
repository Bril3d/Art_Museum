<template>
  <div>
    <FlexTitle>ARTWORKS</FlexTitle>
    <div class="flex flex-wrap justify-center gap-5">
      <ArtCard
        v-for="artwork in artworks.data"
        :key="artwork.id"
        :artwork="artwork"
        @click="selectArtwork(artwork.id)"
      />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
function selectArtwork(artworkId){
    router.push({path:`/artworks/${artworkId}`})
}

const { data: artworks } = await useFetch(
  "https://api.artic.edu/api/v1/artworks?page=1&limit=30"
);
</script>

<style scoped></style>
