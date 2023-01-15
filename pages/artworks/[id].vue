<template>
    <div>
        <ArtworkDetails :artwork="artwork.data" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: artwork } = await useFetch(`https://api.artic.edu/api/v1/artworks/${id}`,{key:id})
if(!artwork.value){
    throw createError({statusCode:404, statusMessage:'Artwork Not Found'})
}
useHead({
    title:`ARTWORK | ${artwork.value.data.artist_title}`,
    meta: [
    { name: 'description', content: artwork.value.data.thumbnail.alt_text }
  ],
})
</script>

<style scoped>

</style>