<template>
    <div class="shadow-sm rounded-md flex flex-col">
        <!-- <div>
            <img :src="artwork.image" alt="">
        </div>
        <div class="text-center">
            {{ artwork.title }}
        </div> -->
        {{ artwork }}
    </div>
</template>

<script>
    export default {
        props:['artwork']
    }
</script>

<style scoped>

</style>