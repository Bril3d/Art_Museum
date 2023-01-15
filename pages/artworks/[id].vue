<template>
    <div>
        <ArtworkDetails :artwork="artwork.data" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: artwork } = await useFetch(`https://api.artic.edu/api/v1/artworks/${id}`,{key:id})
</script>

<style scoped>

</style>