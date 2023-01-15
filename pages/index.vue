<template>
   <FlexTitle>ARTWORKS</FlexTitle>
  <swiper class="w-full"
  :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectFade]"
  :slides-per-view="3"
  :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    effect="fade"
    navigation
  >
    <SwiperSlide v-for="artwork in artworks.data" :key="artwork.id">
      <img class="w-full object-cover h-[800px]" :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`" alt="">
    </SwiperSlide>
  </swiper>
  <FlexTitle class="mt-5">PRODUCTS</FlexTitle>
  <swiper class="w-full"
  :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectFade]"
  :slides-per-view="3"
  :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    effect="fade"
    navigation
  >
    <SwiperSlide v-for="product in products.data" :key="product.id">
      <img class="w-full object-cover h-[500px]" :src="product.image_url" alt="">
    </SwiperSlide>
  </swiper>
</template>

<script setup>
const {data: artworks } = await useFetch(
  "https://api.artic.edu/api/v1/artworks?limit=10"
);
const {data: products } = await useFetch(
  "https://api.artic.edu/api/v1/products?limit=10"
);
</script>

<style scoped></style>
