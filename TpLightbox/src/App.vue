<template>
  <div id="app">
<!--    v-lightbox="title" permet d'indiquer dans quel group seront stocker les images dans notre store-->
    <div v-if="title === 'brazil'">
      <a :href="'https://loremflickr.com/800/600/brazil?lock='+n" v-lightbox="'brazil'" v-for="n in 9" :key="n">
        <img :src="'https://loremflickr.com/320/240/brazil?lock='+n" alt="picture">
      </a>
    </div>
    <section>
      <div v-if="title === 'paris'">
        <a :href="'https://loremflickr.com/800/600/paris?lock='+n" v-lightbox="'paris'" v-for="n in 9" :key="n">
          <img :src="'https://loremflickr.com/320/240/paris?lock='+n" alt="picture">
        </a>
      </div>
    </section>
    <button @click="title = 'brazil'">BRESIL</button>
    <button @click="title = 'paris'">PARIS</button>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox'
import './components/lightbox/LightboxDIrective'
export default {
  name: 'App',
  data () {
    return {
      title: 'brazil'
    }
  },
  components: {
    Lightbox
  }
}
</script>

<style>

</style>
