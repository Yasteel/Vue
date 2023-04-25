<template>
    <div :class="`cart d-none ${cart[0].userId}`">
        <table class="table">
            <thead class="">
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>total</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ `R${item.price}` }}</td>
                    <td>{{ `R${item.price * item.quantity}` }}</td>
                    <td><i class="fas fa-times" @click="doSomething"></i></td>  
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CartRow',
    props: {
        cart: Array
    }
})
</script>

<style scoped>
    .cart{
        margin: 0;
        margin-top: 1rem;
        min-width: fit-content;
    }

    table :is(th,td){
        padding: 1rem 1.5rem 1rem 1rem;
    }
</style>