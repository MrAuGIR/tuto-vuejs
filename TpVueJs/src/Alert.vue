<template>
  <div>
    <transition name="bounce" appear mode="in-out">
      <div class="ui message success" v-if="visible" key="visible">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi doloribus ea eligendi
        excepturi expedita illum laudantium maiores molestiae numquam, odio perspiciatis porro

      </div>
      <div class="ui message success" v-else key="invisible">
        excepturi expedita illum laudantium maiores molestiae numquam, odio perspiciatis porro

      </div>
    </transition>
    <button @click="toggle">Toggle</button>

    <transition-group name="bounce" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>

    <button class="ui button" @click="add()">Ajouter</button>
    <button class="ui button error" @click="shuffle">Mélanger</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: true,
        items: [1,2,3,4,5]
      }
    },
    methods: {
      add: function () {
        this.items.push(Math.floor(Math.random() * 10))
      },
      shuffle: function () {
        this.items = [2,5,1,4,3]
      },
      toggle: function () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style>
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s, transform 1s;
}

.fade-enter, .fade-leave-active{
  opacity: 0;
  transform: translateX(20px);
}
.bounce-move{
  transition: transform 10s;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
