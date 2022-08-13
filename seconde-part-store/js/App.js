/**
 *  La class permet d'englober la logique a un seul endroit
 *  plus facile a modifier ensuite
 */
class NotificationsStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    increment () {
        this.state.count++
    }

    decrement () {
        this.state.count--
    }
}

let notifications_store = new NotificationsStore();

let Counter = {
    data: function (){
        return {
            state: notifications_store.state
        }
    },
    computed: {
        count: function () {
            return this.state.count
        }
    },
    methods: {
        increment: function (){
            notifications_store.increment()
        }
    },
    template: `<button @click="increment">{{ count }}</button>`
}


let Notifications = {
    components:{
      Counter
    },
    methods:{
        addNotifications: function () {
            notifications_store.increment()
        }
    },
    template: `
        <div>
            <counter></counter>
            <button @click="addNotifications">Incrémenter</button>
        </div>
    `
}


new Vue({
    el:'#app',
    data: { },
    components: { Notifications, Counter }
})