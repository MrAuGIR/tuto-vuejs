<template>
  <div id="app">
    <todos v-model="todos"></todos>
    <todos v-model="todos"></todos>
    <router-view/>
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
