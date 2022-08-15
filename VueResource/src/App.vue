<template>
  <div id="app">
    <div class="ui active dimmer" v-if="loading === true">
      <div class="ui loader">

      </div>
    </div>
    <div class="ui four column grid">
      <div class="column" v-for="user in users" :key="user.name">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <input type="text" v-model="user.name" style="width:100%">
            </div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              {{ user.address.street }}<br>
              {{ user.address.zipcode }} {{ user.address.city }}
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button" @click="save(user)">Modifier</div>
              <div class="ui basic red button" @click="destroy(user)">Supprimer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      users: [],
      loading: false
    }
  },
  mounted () {
    this.$user = this.$resource('users{/id}', {}, {}, {
      before: function () {
        this.loading = false // normalement a true -> bug ??
      },
      after: function () {
        this.loading = false
      }
    })
    this.$user.query().then((response) => {
      response.json().then((data) => {
        this.users = data
      })
    }, (response) => {
      console.log('fail', response)
    })
  },
  methods: {
    save (user) {
      this.$user.update({id: user.id}, {name: user.name}).then((response) => {
      }, (response) => {
        console.log('fail', response)
      })
    },
    destroy (user) {
      this.$user.remove({id: user.id}).then((response) => {
        this.users = this.users.filter(u => u !== user)
      }, (response) => {
        console.log('fail', response)
      })
    }
  }
}
</script>

<style>

</style>
