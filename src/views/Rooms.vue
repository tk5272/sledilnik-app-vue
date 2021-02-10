<template>
  <h1>Seznam sob</h1>
  
  <!-- <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button> -->

  <div v-for="room in rooms" :key="room.sobaId" class="container-fluid room">
        <router-link v-bind="room" :to="{ name: 'RoomDetails', params: { id: room.sobaId } }">
            <h3>{{ room.imeSobe }} <small>{{ room.opis }}</small></h3>
        </router-link>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            rooms: []
        }
    },
    methods: {
        redirect(){
            this.$router.push({ name: 'Home'})
        },
        back(){
            this.$router.go(-1);
        },
        forward(){
            this.$router.go(1);
        },
    },
    created() {
    axios.get('http://localhost:8080/v1/sobe')
    .then(res => {
      this.rooms = res.data;
      console.log(res);
    })
    .catch(err => console.log(err))
  },
  computed: {

  }
}
</script>

<style scoped>

.room {
    background-color: gainsboro;
    padding: 10px;
    margin-bottom: 5px;
}

</style>
