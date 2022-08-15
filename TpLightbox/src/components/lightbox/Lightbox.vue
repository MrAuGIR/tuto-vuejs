<style src="./lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image" @click.prevent="close">
<!--    le ':key' dans la balise du composant permet d'indiquer a la transition que l'image a changer et qu'il faut créer un nouveau component-->
    <transition :name="transition">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox__close" @click="close"></div>
    <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev">&lt;</div>
    <div class="lightbox__btn lightbox__next" @click.stop.prevent="next">&gt;</div>
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
      state: store.state,
      direction: 'next'
    }
  },
  components: {
    LightboxImage
  },
  methods: {
    close () {
      store.close()
    },
    prev () {
      this.direction = 'prev'
      store.prev()
    },
    next () {
      this.direction = 'next'
      store.next()
    }
  },
  computed: {
    image () {
      // retourne l'url seulement si index est défini (a la construction du component index n'est pas défini)
      if (this.state.index !== false) {
        return this.state.images[this.state.group][this.state.index]
      }
    },
    transition () {
      return 'lightbox-' + this.direction
    }
  }
}
</script>

<style scoped>

</style>
