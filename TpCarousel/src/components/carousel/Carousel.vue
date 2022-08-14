<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__prev" @click.prevent="prev()">Precedent</button>
    <button class="carousel__nav carousel__next" @click.prevent="next()">Suivant</button>
    <div class="carousel__pagination">
      <button v-for="n in slideCount" @click.prevent="goto(n-1)" :key="n"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    console.log(this.$children)
    return {
      index: 0,
      slides: [],
      direction: 'right'
    }
  },
  computed: {
    slideCount () {
      return this.slides.length
    }
  },
  methods: {
    next () {
      this.index++
      this.direction = 'right'
      if (this.index > this.slideCount - 1) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slideCount - 1
      }
    },
    goto (index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    }
  },
  mounted () {
    this.slides = this.$children
  },
  watcher: {
    slides (slides) {
      if (this.index >= this.slideCount) {
        this.index = this.slideCount - 1
      }
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
  }

  .carousel__nav{
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top:-31px;
    background: url(back.png);
    width: 63px;
    height: 63px;
  }

  .carousel__nav.carousel__next{
    right: 10px;
    left: auto;
    background: url(next.png);
  }

  .carousel__pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .carousel__pagination button {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0.8;
    border-radius: 10px;
    margin: 0 2px;
  }

  .carousel__pagination button.active {
    background-color: #fff;
  }
</style>
