<template>
  <div class="item-box" :key="item.name">
    <div class="item-box-icon">

    </div>
    <div class="item-box-data">
      <span class="item-box-data-name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {type: Object, default () { return [] }}
  },
  data () {
    return {
      item: this.value
    }
  }
}
</script>

<style scoped>
  .item-box{
    display: flex;
    flex-direction: row;
    max-width: 200px;
  }
</style>
