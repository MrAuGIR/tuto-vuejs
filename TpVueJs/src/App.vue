<template>

  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <counter></counter>
    <alert></alert>
  </div>
</template>

<script>
  import Counter from "./Counter";
  import Alert from "./Alert";
  import Item from "./item";
export default {
  components: {
    Counter,
    Alert,
    Item
  },
  name: 'app',
  data () {
    return {
      'items': [
        {
          'name': 'poire',
          'category': 'fruit'
        },
        {
          'name': 'pomme',
          'category': 'fruit'
        }
      ]
    }
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.main.container{
  padding-top: 50px;
}
</style>
