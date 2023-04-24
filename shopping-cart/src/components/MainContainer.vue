<template>
    <div class="container">
        
        <div class="cartContainer mb-2" v-for="user in Users">

            <div class="heading-row">
                <a href="#" class=""></a>
                <a href="#" class=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="personal-row">
                <div class="user-image">
                    <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                </div>
                <div class="user-details">
                    <p>Yasteel Gungapursat</p>
                    <p>yasteel.gunga01@gmail.com</p>
                    <p>49 Acara Street</p>
                </div>
            </div>
            <!-- <div class="cart">
                <table class="table">
                    <thead class="">
                        <th>Product</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>total</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product</td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptas dolorem.</td>
                            <td>2</td>
                            <td>R200.00</td>
                            <td>R400.00</td>
                            <td><i class="fas fa-times" @click="doSomething"></i></td>  
                        </tr>

                        <tr>
                            <td>Product</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor non. Neque maxime consequuntur laborum modi nam doloribus, necessitatibus unde?</td>
                            <td>2</td>
                            <td>R200.00</td>
                            <td>R400.00</td>
                            <td><i class="fas fa-times"></i></td>  
                        </tr>
                    </tbody>
                </table>

            </div> -->
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainContainer',
    props: {
        Users: Object
    }
})
</script>

<style scoped>
    
    .heading-row{
        padding: .5rem 1rem;
        background: #212529;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    a{

        text-decoration: none;
        color: white;
    }

    .personal-row{
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 1rem rgba(0,0,0,.3);
        min-width: fit-content;
    }

    .user-details p:nth-child(1){
        font-size: 1.5rem;
        font-weight: 700;
    }

    .user-details{
        padding: 1rem 3rem;
        font-family: Helvetica, sans-serif;
    }

    .user-image img{
        width: 200px;
        height: 200px;
    }

    .cart{
        margin-top: 1rem;
        box-shadow: 0 0 1rem rgba(0,0,0,.3);
        min-width: fit-content;
    }

    .item{
        width: 350px;
        display: flex;
        flex-direction: row;

        border: 1px solid black;
    }

    table :is(th,td){
        padding: 1rem 1.5rem 1rem 1rem;
    }

    @media only screen and (max-width: 600px) {
        .personal-row{
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
        }   

        .user-details{
            padding: 0;

        }
    } 
</style>

