<template>
  <div>
    <search-item v-for="item in items" :key="item.name" :item="item"></search-item>
  </div>
</template>

<script>
import SearchItem from './SearchItem'

export default {
  name: 'SearchList',
  props: {
    'items': {type: Array, default: []},
    'value': {type: Array, default: []}
  },
  watch: {
    value: function (items) {
      this.$parent.todos = items
    }
  },
  components: {
    SearchItem
  },
  computed: {
    readyItems: function () {
      return this.items.filter(item => item.status === 'ready')
    }
  }
}
</script>

<style scoped>

</style>
