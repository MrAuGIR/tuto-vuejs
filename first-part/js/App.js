/**
 * Creation d'une directive et de ses modifiers
 */
/** on peut crée un object directement passer une fonction en second parametre ) */
Vue.directive("hello",function (el,binding){
    console.log('update')
    el.value = binding.value
})

let salut = function(el,binding){
    el.value = binding.value
    console.log('bind')
}

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

/**
 * Utilisation de computed au lieu de method
 * computed met en cache les valeurs et met a jour les valeurs uniquement quand il y a un changement
 * utilisation de watcher pour detecter une variable modifié
 * @type {Vue}
 */
var watcher = new Vue({
    el: "#watcher",
    data: {
        success: false,
        message: '',
        firstName: 'jean',
        lastName: 'DeLaTour'
    },
    computed: {
        cls: function (){
            console.log('cls called')
            return this.success === true ? "success" : "error";
        },
        fullName: {
            get: function () {
                console.log();
                return this.firstName + ' ' + this.lastName;
            },
            set: function (value){
                let parts = value.split(' ')
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }
    },
    watch: {
        fullName: function (value) {
            console.log(value)
        }
    }
})

/**
 * Directive avec leur modifiers
 * attributs special qui permet de faire des comportement particulier
 * v-bind par exemple
 */
var directive = new Vue({
    el: "#directive",
    directives:{
        salut
    },
    data: {
        message: 'test directive'
    },
    methods: {
        demo: function (e) {
            console.log("salut")
        }
    }
})

/**
 * Les filtres
 */
Vue.filter('capitalize', function (value,prefix,suffix) {
    return prefix +'_'+ value.toUpperCase()+'_'+ suffix
})

Vue.filter('reverse', function (value) {
    return value
        .split('').reverse().join('')
})

var filtres = new Vue({
    el: '#filtres',
    data:{
        message:"test des filtres"
    }
})

/**
 * COmposant globale
 * les composants
 */
Vue.component('message',{
    props: {
        type: {type:String, default: 'success'},
        message: String
    },
    template: `<div class="ui message" :class="type">{{ message }}</div>`
})

let message2 = {
    props: {
        type: {type:String, default: 'success'},
        message: String,
        header: String
    },
    template: `<div class="ui message" :class="type">
                    <i class="close icon" @click.prevent="close()"></i>
                    <div class="header">{{ header }}</div>
                        {{ message }}
               </div>`,
    methods:{
        close () {
            this.$emit('close')
        }
    }
}

/** Pour éviter que data soit defini globalement (problematique quand plusieurs instance d'un meme objet)
 * On met en place un function qui renvoie un objet sur la propriete 'data'
 * Ce qui permet de générer un nouveau state
 * */
let counter = {
    data:function(){
        return {
            count:0
        }
    },
    props:{
        start: {type:Number, default: 0}
    },
    methods: {
        increment: function () {
            this.count ++
        }
    },
    template: `<div>
                    <button @click="increment">{{ count }}</button>
                </div>`,
    mounted: function (){
        this.count += this.start
    }

}

let formUser = {
    /**
     * Si on utilise v-model plutôt que :user pour transmettre l'utilisateur la props doit se nommer 'value'
     * */
    props: {
        value: Object
    },
    data (){
      return { user: {...this.value}}
    },
    methods: {
        save (){
            this.$emit('input',this.user)
        }
    },
    template: `
        <form class="ui form" @submit.prevent="save">
            <div class="field">
                <label for="">Prénom</label>
                <input type="text" v-model="user.firstName">
            </div>
            <div class="field">
                <label for="">Nom</label>
                <input type="text" v-model="user.lastName">
            </div>
            <button class="ui button" type="submit">Envoyer</button>
            <p><slot name="footer"></slot></p>
        </form>
    `
}
/**
 *
 * @type {Vue}
 */
var componentsVue = new Vue({
    el:"#composants",
    components: {
        message2,
        counter,
        formUser
    },
    data:{
        message: "Test des composants",
        alert: false,
        user: {
            firstName: 'jean',
            lastName: 'DeLaTour'
        }
    },
    methods:{
        showAlert () {
            console.log(this.alert)
            this.alert = true
        },
        hideAlert () {
            this.alert = false
        }

    }
})

