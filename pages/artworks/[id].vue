<template>
    <div>
        <ArtworkDetails :artwork="artwork.data" />
    </div>
</template>

<script setup>
const router = useRouter();
const { id } = useRoute().params
const { data: artwork } = await useFetch(`https://api.artic.edu/api/v1/artworks/${id}`,{key:id})
if(!artwork.value){
    throw createError({statusCode:404, statusMessage:'Artwork Not Found'})
}
</script>

<style scoped>

</style>