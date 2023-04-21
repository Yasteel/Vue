const app = Vue.createApp({
    data(){
        return {
            cart:[],
            premium: true            
        }
    },
    methods: { 
        updateCart(id){
            if(!this.cart.includes(id)){
                this.cart.push(id);
            }
        },
        removeFromCart(id){
            
            if(this.cart.includes(id)){
                var index = this.cart.findIndex(e => e == id);
                
                if(index >= 0){
                    this.cart.splice(index, 1);
                }
            }
        }
    }
})
