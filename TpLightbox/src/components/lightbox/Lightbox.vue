<style src="./lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image" @click.prevent="close">
    <lightbox-image :image="image"></lightbox-image>
    <div class="lightbox__close"></div>
  </div>
</template>

<script>
import './LightboxDIrective'
import store from './LightboxStore'
import LightboxImage from './LightboxImage'

export default {
  name: 'Lightbox',
  data () {
    return {
      url: '??',
      state: store.state
    }
  },
  components: {
    LightboxImage
  },
  methods: {
    close () {
      store.close()
    }
  },
  computed: {
    image () {
      // retourne l'url seulement si index est défini (a la construction du component index n'est pas défini)
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
    }
  }
}
</script>

<style scoped>

</style>
