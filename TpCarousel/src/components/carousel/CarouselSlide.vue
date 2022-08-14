<!--utilisation de v-show (au lieu de v-if) pour eviter que vuejs refasse le dom trop souvent-->
<template>
    <transition :name="transition">
      <div v-show="visible">
        <slot></slot>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'CarouselSlide',
  props: {
    index: {type: Number, default: 0}
  },
  computed: {
    transition () {
      if (this.$parent.direction !== null) {
        return 'slide-' + this.$parent.direction
      }
    },
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>

<style scoped>
  .slide-right-enter-active{
    animation: slideRightIN .5s;
  }

  .slide-right-leave-active{
    animation: slideRightOUT .5s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  @keyframes slideRightIN {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideRightOUT {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .slide-left-enter-active{
    animation: slideLeftIN .5s;
  }

  .slide-left-leave-active{
    animation: slideLeftOUT .5s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  @keyframes slideLeftIN {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideLeftOUT {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>
