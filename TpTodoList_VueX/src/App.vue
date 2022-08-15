<template>
  <div id="app">
    <todos></todos>
    <todos></todos>
    <todos></todos>
  </div>
</template>

<script>
import Todos from './components/Todos'
export default {
  data () {
    return {
      todos: [
        {
          name: 'Demo',
          completed: true
        }
      ]
    }
  },
  components: {
    Todos
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: 'jean',
        completed: false
      })
    }
  }
}
</script>

<style>

</style>
