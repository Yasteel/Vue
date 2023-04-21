<template>
  <NavBar />
  <MainContainer Name="Yasteel" Surname="Gungas"/> <!-- Props parsed down to component --> 

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
      users: []
    }
  },

  created(){
    // this.users = [
    //   {
    //     id: 1,
    //     name: "Yasteel",
    //     surname: "Gungas",
    //     username: "yasteel.gunga01@gmail.com",
    //     address: "49 Acara Street"
    //   },
    //   {
    //     id: 2,
    //     name: "John",
    //     surname: "Doe",
    //     username: "JoDoe@gmail.com",
    //     address: "668 Some Lane"
    //   },
    //   {
    //     id: 1,
    //     name: "Jane",
    //     surname: "Doe",
    //     username: "JaneD@gmail.com",
    //     address: "668 Some Lane"
    //   }
    // ];

    // console.log(this.data)

    console.log("Logged On Created Method");
    
  },

  methods: {
    test(){
      console.log("It Graafs")
    }
  }
};
</script>
