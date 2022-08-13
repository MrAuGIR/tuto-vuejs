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
    }
})