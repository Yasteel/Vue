<template>
     <div class="heading-row">
        <a href="#" class="personal-info" :id="user.id" @click="getUserDetails(user.id)">{{ `${user.name} ${user.surname}` }}</a>
        <a href="#" class="cart-info" :id="user.id" @click="getUserCart(user.id)"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeadingRow',
    props: {
        user: Object
    },
    methods: {
        getUserDetails(id){
            let row = $(`.personal-row.${id}`);

            if(row.hasClass('d-none'))
            {
                row.removeClass('d-none').addClass('fade-in-down');
            }
            else
            {
                row.addClass('d-none').removeClass('d-flex');
            }
        },
        getUserCart(id){
            let row = $(`.cart.${id}`);

            if(row.hasClass('d-none'))
            {
                row.removeClass('d-none').addClass('fade-in-down');
            }
            else
            {
                row.addClass('d-none').removeClass('d-flex');
            }
        }
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

    }
    a{

        text-decoration: none;
        color: white;
    }
</style>