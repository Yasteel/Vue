<template>
    <div class="container">
        <div class="cartContainer mb-2">
            <div class="heading-row">
                <a href="#" class="">{{ Name }} {{ Surname }}</a>
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

    .personal-row{
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 1rem rgba(0,0,0,.3);
        min-width: fit-content;
        /* background: #212529;
        color: white; */
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

