<template>
    <div v-if="pending" class="grid sm:grid-cols-2 gap-5">
        <div>
        <AnimatedPlaceholder class="sm:border-r-2 px-5 h-[600px]" />
        <AnimatedPlaceholder class="w-[150px] mt-4" />
        <AnimatedPlaceholder class="mt-4" />
        <AnimatedPlaceholder class="mt-4" />
        <AnimatedPlaceholder class="mt-4" />
        <AnimatedPlaceholder class="mt-4" />
        <AnimatedPlaceholder class="mt-4" />
    </div>
        <div class="flex flex-col gap-5 px-5 sm:px-0">
        <AnimatedPlaceholder />
        <AnimatedPlaceholder class="w-[150px]" />
        <AnimatedPlaceholder class="h-[220px]"/>
    </div>
    </div>
    <div v-else>
        <ArtworkDetails :artwork="artwork.data" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { pending, data: artwork } = await useLazyFetch(`https://api.artic.edu/api/v1/artworks/${id}`,{key:id})


</script>

<style scoped>

</style>