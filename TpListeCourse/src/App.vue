<template>
  <div class="container">
    <div id="app">
      <div class="app-left-panel">
        <search-list :items="this.items"></search-list>
      </div>
      <div class="app-center-panel">
        <todo-list v-model="todos"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>

import SearchList from './components/SearchList'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    SearchList,
    TodoList
  },
  data () {
    return {
      items: [
        {
          'name': 'Poire',
          'category': 'fruit',
          'status': 'ready',
          'quantity': '0'
        },
        {
          'name': 'Pomme',
          'category': 'fruit',
          'status': 'ready',
          'quantity': '0'
        }
      ],
      todos: []
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css');
* {
  box-sizing: border-box;
}

html, body{
  background-color: #d2bdbd;
}

#app, div {
  background-color: #e8dede;
}

.container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}

div.app-left-panel {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
  outline: 1px solid red;
}

div.app-center-panel {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;
  outline: 1px solid black;
}
</style>
