<template>
    <div class="container">
        
        <div class="cartContainer mb-2" v-for="user in users.users" :key="user.id">

            <HeadingRow :user="user" />
            <DetailsRow :user="user" />
            <CartRow :cart="user.cart"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeadingRow from './HeadingRow.vue'
import DetailsRow from './DetailsRow.vue'
import CartRow from './CartRow.vue';


export default defineComponent({
    name: 'MainContainer',
    components: {
        HeadingRow,
        DetailsRow,
        CartRow
    },
    props: {
        users: Object
    }
})
</script>

<style >
    .cartContainer{
        border: 1px solid black;

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

