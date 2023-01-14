<template>
    <ArtCard v-for="artwork in artworks.data" :key="artwork.id" :artwork="artwork" />
</template>

<script setup>
        const { data:artworks } = await useFetch('https://api.artic.edu/api/v1/artworks?page=1&limit=5')
    
</script>

<style scoped>

</style>