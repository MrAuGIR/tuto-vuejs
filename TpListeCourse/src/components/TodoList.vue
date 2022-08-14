<template>
  <div class="todos">
    <todo-item class="todo" v-for="todo in todos" :item="todo" :key="todo.name"></todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  props: {
    value: {type: Array, default () { return [] }}
  },
  name: 'TodoList',
  data () {
    return {
      'todos': []
    }
  },
  components: {
    TodoItem
  },
  watch: {
    value (value) {
      this.todos = value
    }
  }
}
</script>

<style scoped>
  div.todos{
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
  }

  .todo{
    display: flex;
    flex-direction: row;
  }

</style>
