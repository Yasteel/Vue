<template>
    <div :class="`personal-row d-none ${user.id}` ">
        <div class="user-image">
            <img :src="user.image" alt="">
        </div>
        <div class="user-details">
            <p>{{ `${user.name} ${user.surname}` }}</p>
            <p>{{ user.username }}</p>
            <p>{{ user.address }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DetailsRow',
    props: {
        user: Object
    }
})
</script>

<style scoped>
    .personal-row{
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 1rem rgba(0,0,0,.3);
        min-width: fit-content;
        margin-top: 1rem;
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
</style>