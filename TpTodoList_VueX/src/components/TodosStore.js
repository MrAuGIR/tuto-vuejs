import Vuex from 'vuex'

const state = {
  todos: [
    {
      name: 'Notre premiere tache',
      completed: true
    }
  ]
}

const getters = {
  todos: state => state.todos,
  completedTodo: state => state.todos.filter(todo => todo.completed),
  remainingTodo: state => state.todos.filter(todo => !todo.completed),
  remainingTodosCount: state => getters.remainingTodo().length,
  completedTodosCount: state => getters.completedTodo().length
}

const mutations = {
  ADD_TODO: (state, name) => {
    state.todos.push({
      name: name,
      completed: false
    })
  },
  DELETE_TODO: (state, todo) => {
    state.todos.filter(i => i !== todo)
  }
}

const actions = {
  addTodo: (store, name) => {
    store.commit('ADD_TODO', name)
  },
  deleteTodo: (store, todo) => {
    store.commit('DELETE_TODO', todo)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
})

global.store = store

export default store
