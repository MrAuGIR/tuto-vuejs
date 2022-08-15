<template>
  <div @click.stop>
    <div v-if="loading" class="lightbox__loading"></div>
    <transition name="lightbox-fade">
      <img :src="src" class="lightbox__image" :style="style" alt="une image" :key="src">
    </transition>
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
        top: ((window.innerHeight - height) * 0.5) + 'px',
        left: ((window.innerWidth - width) * 0.5) + 'px'
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
    this.resizeEvent = () => {
      console.log('resize')
      this.resizeImage(image)
    }
    window.addEventListener('resize', this.resizeEvent)
  },
  destroyed () {
    // on remove l'event 'redimension de la fenetre' quand on quite la lightbox
    // pour eviter que cette event s'active quand on redimension la fenetre quand la lightbox n'est pas active
    window.removeEventListener('resize', this.resizeEvent)
  }
}
</script>

<style scoped>

</style>
