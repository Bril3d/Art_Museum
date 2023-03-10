// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-swiper'],
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Art Meseum',
          meta: [
            { name: 'description', content: 'Art Meseum' }
          ],
        }
      }
})
