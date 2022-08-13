var app = new Vue({
    el: '#app',
    data: {
        message: 'salut les gens !',
        link: 'https://www.google.fr'
    }
})
var seen = new Vue({
    el: '#message',
    data: {
        success: true,
        message: "coucou",
        cls: "success"
    },
    methods:{
        close: function () {
            this.message = "fermé"
            this.success =false
        },
        style : function (){
            if(this.success){
                return {background: "green"}
            }else{
                return {background: "red"}
            }
        }
    }
})

var list = new Vue({
    el:'#list',
    data: {
        persons: ['aurelien','julien','thomas']
    },
    methods: {
        addPerson: function () {
            this.persons.push('marion')
        }
    }
})

/**
 * Les propriété traqué sont celles defini dans data
 * syntax -> ajouter '$' devant les variables utilisé uniquement dans des fonctions
 * @type {Vue}
 */
var vm = new Vue({
    el: '#timer',
    data:{
        seconds: 0
    },
    mounted: function (){
        this.$interval = setInterval(() => {
            console.log('Time')
            this.seconds ++
        },1000)
    },
    destroyed: function () {
        clearInterval(this.$interval)
    }
})