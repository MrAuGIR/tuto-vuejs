<template>
  <div>
    <h1>Page A</h1>
    <ul>
      <router-link :to="{name: 'a.b'}">sous-page a.b</router-link>
      <router-link :to="{name: 'a.c'}">sous-page a.c</router-link>
    </ul>
    <h3>Sous-vue</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  data () {
    return {
      msg: 'salut'
    }
  }
}
</script>

<style scoped>

</style>
