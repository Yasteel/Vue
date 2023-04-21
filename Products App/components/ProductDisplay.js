app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" alt="socks" :class="{'out-of-stock-img': !inStock}">
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <p v-if="sale.onSale"> {{ sale.discount }}% off </p>

                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p> 

                <product-details :details="details"></product-details>

                <div 
                    v-for="(varient, index) in varients" 
                    :key="varient.id" 
                    @mouseover="updateVarient(index)"
                    class="color-circle"
                    :style="{backgroundColor: varient.color}">
                </div>
                
                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    @:click="addToCart"
                    :disabled="!inStock">Add to Cart
                </button>
                
                <button
                    class="button"
                    @click="removeFromCart">Remove From Cart
                </button>

            </div>
        </div>
    </div>`,
    data(){
        return {
            product: 'Socks',
            brand: 'Vue Master',
            selectedVarient: 0,
            inventory: 5,
            sale: {
                onSale: true,
                discount: 75
            },
            details: ['50% Cotton', '30% Wool', '20% Polyester'],
            varients: [
                { 
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50
                },
                { 
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0
                }
            ],
            
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.varients[this.selectedVarient].id);
        },

        removeFromCart(){
            this.$emit('remove-from-cart', this.varients[this.selectedVarient].id);
        },

        updateVarient(index){
            this.selectedVarient = index
        }
    },
    computed: {
        title(){
            return `${this.brand} ${this.product}`;
        },
        image(){
            return this.varients[this.selectedVarient].image;
        },
        inStock(){
            return this.varients[this.selectedVarient].quantity;
        },
        shipping(){
            return this.premium ? 'Free' : 'R200.00';
        }
    }
})