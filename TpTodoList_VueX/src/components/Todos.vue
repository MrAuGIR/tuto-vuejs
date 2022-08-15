<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="ajouter une tache" v-model="newTodo" @keyup.enter="addTodo()">
    </header>
    <div class="main">
      <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allDone">
      <label for="toggle-all">
        Mark all as complete
      </label>
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodo" :key="todo.name"  :class="{completed: todo.completed, editing: todo === editing}">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="hasTodos">
      <span class="todo-count"><strong>{{ remainingTodosCount }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
      <button class="clear-completed" v-show="completedTodosCount" @click.prevent="deleteCompleted()">del todo completed</button>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

export default {
  store: global.store,
  props: {
    value: {type: Array, default () { return [] }}
  },
  data () {
    return {
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: null
    }
  },
  methods: {
    ...Vuex.mapActions({
      addTodoStore: 'addTodo',
      deleteTodo: 'deleteTodo'
    }),
    addTodo () {
      this.addTodoStore(this.newTodo)
      this.newTodo = ''
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.$emit('input', this.todos)
    },
    editTodo (todo) {
      this.editing = todo
      this.oldTodo = todo.name
    },
    doneEdit () {
      this.editing = null
    },
    cancelEdit () {
      this.editing.name = this.oldTodo
      this.doneEdit()
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'todos',
      'remainingTodosCount',
      'completedTodosCount',
      'remainingTodo',
      'completedTodo'
    ]),
    allDone: {
      get () {
        return this.remainingTodosCount === 0
      },
      set (value) {
        console.log(value)
        this.todos.forEach(todo => {
          todo.completed = value
        })
      }
    },
    filteredTodo () {
      if (this.filter === 'todo') {
        return this.remainingTodo
      } else if (this.filter === 'done') {
        return this.completedTodo
      }
      return this.todos
    },
    hasTodos () {
      return this.todos.length > 0
    },
    hasCompleted () {
      return []
      // return this.todos.filter(todo => todo.completed).length > 0
    }
  },
  directives: {
    focus: function (el, value) {
      if (value) {
        Vue.nextTick(() => {
          el.focus()
        })
      }
    }
  }
}
</script>

<style src="/home/agirard/Projets/Tutoriels/Grafikart/tuto-vuejs/TpTodoList_VueX/src/components/todos.css">

</style>
