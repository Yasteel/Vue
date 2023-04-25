<template>
  <NavBar />
  <MainContainer :users="this.data" @show-user-details="test"/> <!-- Props parsed down to component --> 

</template>




<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from './components/NavBar.vue';
import MainContainer from './components/MainContainer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MainContainer
  },

  data(){
    return {
      data: {
        users: [
          {
            id: 1,
            name: "Yasteel",
            surname: "Gungas",
            username: "yasteel.gunga01@gmail.com",
            address: "49 Acara Street",
            image: "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cart: [
              {
                userId: 1,
                id: 59,
                title: "Spring and summershoes",
                price: 20,
                quantity: 3,
                total: 60,
                discountPercentage: 8.71,
                discountedPrice: 55
              },
              {
                userId: 1,
                id: 88,
                title: "TC Reusable Silicone Magic Washing Gloves",
                price: 29,
                quantity: 2,
                total: 58,
                discountPercentage: 3.19,
                discountedPrice: 56
              },
              {
                userId: 1,
                id: 18,
                title: "Oil Free Moisturizer 100ml",
                price: 40,
                quantity: 2,
                total: 80,
                discountPercentage: 13.1,
                discountedPrice: 70
              }
            ]
          },
          {
            id: 2,
            name: "John",
            surname: "Doe",
            username: "JoDoe@gmail.com",
            address: "668 Some Lane",
            image: "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cart: [
              {
                userId: 2,
                id: 96,
                title: "lighting ceiling kitchen",
                price: 30,
                quantity: 2,
                total: 60,
                discountPercentage: 14.89,
                discountedPrice: 51
              },
              {
                userId: 2,
                id: 91,
                title: "Black Motorbike",
                price: 569,
                quantity: 3,
                total: 1707,
                discountPercentage: 13.63,
                discountedPrice: 1474
              },
              {
                userId: 2,
                id: 9,
                title: "Infinix INBOOK",
                price: 1099,
                quantity: 1,
                total: 1099,
                discountPercentage: 11.83,
                discountedPrice: 969
              },
              {
                userId: 2,
                id: 16,
                title: "Hyaluronic Acid Serum",
                price: 19,
                quantity: 1,
                total: 19,
                discountPercentage: 13.31,
                discountedPrice: 16
              }
            ]
          },
          {
            id: 3,
            name: "Jane",
            surname: "Doe",
            username: "JaneD@gmail.com",
            address: "668 Some Lane",
            
            cart: [
              {
                userId: 3,
                id: 36,
                title: "Sleeve Shirt Womens",
                price: 90,
                quantity: 1,
                total: 90,
                discountPercentage: 10.89,
                discountedPrice: 80
              },
              {
                userId: 3,
                id: 54,
                title: "Pubg Printed Graphic T-Shirt",
                price: 46,
                quantity: 1,
                total: 46,
                discountPercentage: 16.44,
                discountedPrice: 38
              },
              {
                userId: 3,
                id: 11,
                title: "perfume Oil",
                price: 13,
                quantity: 3,
                total: 39,
                discountPercentage: 8.4,
                discountedPrice: 36
              },
              {
                userId: 3,
                id: 47,
                title: "Sneaker shoes",
                price: 120,
                quantity: 2,
                total: 240,
                discountPercentage: 10.37,
                discountedPrice: 215
              },
              {
                userId: 3,
                id: 64,
                title: "Leather Strap Skeleton Watch",
                price: 46,
                quantity: 3,
                total: 138,
                discountPercentage: 10.2,
                discountedPrice: 124
              }
            ]
          }
        ]
      }
    }
  },

  methods: {
    test(id: Number){
      console.log(id);
    }
  }
};
</script>
  
