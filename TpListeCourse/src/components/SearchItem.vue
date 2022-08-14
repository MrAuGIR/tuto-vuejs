<template>
  <div class="item" :class="addedClass" v-show="true">
    <div class="item-part item-logo">
      <img src="">
    </div>
    <div class="item-part item-data">
      <span class="item-data-name">{{ this.item.name }}</span>
      <span class="item-data-category">{{ this.item.category }}</span>
    </div>
    <div class="item-part item-quantity">
      <div class="item-quantity-action">
        <button class="item-quantity-plus" @click.prevent="upQuantity"><i class="plus icon"></i></button>
        <button class="item-quantity-moins" @click.prevent="downQuantity"><i class="minus icon"></i></button>
      </div>
      <div class="item-quantity-value">
        <input type="number" v-model="this.item.quantity">
      </div>
    </div>
    <div class="item-part item-add">
      <button class="item-add-todo" @click.prevent="addTodo" :disabled="isAdded"><i class="play icon"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    item: {
      type: Object,
      default () {
        return {
          name: 'unknown',
          category: 'unknown',
          quantity: 0,
          status: 'ready'
        }
      }
    }
  },
  methods: {
    upQuantity () {
      this.item.quantity++
      if (this.item.quantity > 99) {
        this.item.quantity = 0
      }
    },
    downQuantity () {
      this.item.quantity--
      if (this.item.quantity < 0) {
        this.item.quantity = 99
      }
    },
    addTodo () {
      this.item.status = 'added'
      this.$parent.value.push(this.item)
    }
  },
  computed: {
    addedClass () {
      if (this.item.status === 'ready') {
        return {'item-ready': true}
      }
      return {'item-added': true}
    },
    isAdded () {
      return this.item.status === 'added'
    }
  }
}
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  .item {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #c9b7b7;
  }

  .item-ready{
    color: black;
  }

  .item.item-added {
    color: #c0a8a8;
  }

  .item-part {
    display: flex;
    flex-direction: column;
    padding: 8px 5px;
    font-size: 9pt;
  }

  .item-logo {
    width: 20%;
  }

  .item-data {
    width: 40%
  }

  .item-quantity{
    width: 30%;
    flex-direction: row;
  }

  .item-quantity div.item-quantity-action{
    display: flex;
    flex-direction: column;
  }

  .item-quantity div.item-quantity-value > input{
    width: 30px;
    height: 100%;
    text-align: center;
  }

  .item-action {
    width: 20%;
  }

  .item-data-name {
    font-size: 12pt;
    font-weight: 700;
  }
</style>
