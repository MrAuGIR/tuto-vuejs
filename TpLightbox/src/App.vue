<template>
  <div id="app">
    <a :href="'https://loremflickr.com/800/600?lock='+n" v-lightbox v-for="n in 9" :key="n">
      <img :src="'https://loremflickr.com/320/240?lock='+n" alt="picture">
    </a>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox'
import './components/lightbox/LightboxDIrective'
export default {
  name: 'App',
  components: {
    Lightbox
  }
}
</script>

<style>

</style>
