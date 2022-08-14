<template>
  <div id="app">
    <carousel>
      <carousel-slide v-for="n in slides" :key="n-1" :index="n-1">
        <div style="position: absolute; left:0; right: 0; text-align: center; top: 50%; font-size: 16px">Slide {{n}}</div>
        <img :src="'https://picsum.photos/id/'+ (1001+n) +'/630/300'" alt="image-carousel" width="100%" height="auto">
      </carousel-slide>
    </carousel>
    <button @click="addSlide">Ajouter un slide</button>
    <button @click="removeSLide">SUpprimer un slide</button>
  </div>
</template>

<script>

import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  data () {
    return {
      slides: 5,
      todos: [
        {
          name: 'Demo',
          completed: true
        }
      ]
    }
  },
  components: {
    Carousel,
    CarouselSlide
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: 'jean',
        completed: false
      })
    },
    addSlide () {
      this.slides++
    },
    removeSLide () {
      this.slides--
    }
  },
  computed: {
    ids (n) {
      return 1002 + n
    }
  }
}
</script>

<style>

</style>
