<template>
  <div>
    <FlexTitle>ARTWORKS</FlexTitle>
    <div class="flex flex-wrap justify-center gap-5">
      <ArtCard
        v-for="artwork in artworks.data"
        :key="artwork.id"
        :artwork="artwork"
      />
    </div>
  </div>
</template>

<script setup>
const { data: artworks } = await useFetch(
  "https://api.artic.edu/api/v1/artworks?page=1&limit=30"
);
</script>

<style scoped></style>
