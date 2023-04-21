<template>
    <div class="container">
        <div class="cartContainer mb-2">
            <div class="heading-row">
                <a href="#" class="">{{ Name }} {{ Surname }}</a>
                <a href="#" class=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="rows">

            </div>
            <div class="rows">

            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainContainer',
    props: {
        Name: {
            type: String,
            default: "Yasteel"
        },
        Surname: String
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
</style>

