<template>
  <div @click.stop>
    <div v-if="loading">chargement...</div>
    <img :src="src" class="lightbox__image" :style="style" alt="une image">
  </div>
</template>

<script>
export default {
  name: 'LightboxImage',
  props: {
    image: String
  },
  data () {
    return {
      loading: true,
      src: false,
      style: {}
    }
  },
  methods: {
    resizeImage: function (image) {
      let width = image.width
      let height = image.height
      if (width > window.innerWidth || height > window.innerHeight) {
        let ratio = width / height
        let windowRatio = window.innerWidth / window.innerHeight
        if (ratio > windowRatio) {
          // la largeur dépasse --> on redimmentionne
          width = window.innerWidth
          height = width / ratio
        } else {
          // la hauteur dépasse de notre fenetre
          height = window.innerHeight
          width = height * ratio
        }
      }
      this.style = {
        width: width + 'px',
        height: height + 'px',
        top: ((window.innerHeight - height) + 0.5) + 'px',
        left: ((window.innerWidth - width) + 0.5) + 'px'
      }
    }
  },
  mounted () {
    let image = new window.Image()
    image.onload = () => {
      this.loading = false
      this.src = this.image
      this.resizeImage(image)
    }
    image.src = this.image
    window.addEventListener('resize', () => {
      this.resizeImage(image)
    })
  }
}
</script>

<style scoped>

</style>
