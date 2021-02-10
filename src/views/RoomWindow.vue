<template>
  <div v-if="details">
    <h1 v-if="details">{{ details.imeSobe }}</h1>
    <span v-if="details.osebe">Danes z vami: {{details.osebe.ime}} {{details.osebe.priimek}}</span><br>
    <span>zasedenost: {{ details.stLjudi }} / {{ details.maxLjudi }}</span><br>
    <span>velikost: {{ details.velikost }} m<sup>2</sup></span>
    <hr>
    <button class="btn btn-outline-success" @click="addPerson"> + </button>
    <button class="btn btn-outline-danger" @click="removePerson"> - </button>

  </div>
  <div v-else>
    <p class="bg-danger text-light">Prosim izberi sobo.</p>
  </div>
</template>

<script>
import RoomService from '../services/RoomService.js'

const roomService = new RoomService();

export default {
    name: 'RoomWindow',
    data() {
        return {
        }
    },
    props: ['details'],
    methods: {
        removePerson() {
            let temp = this.details;
            temp.stLjudi--;
            roomService
                .roomPut(temp.sobaId, temp)
                .then(res => console.log(res));
        },
        addPerson() {
             let temp = this.details;
            temp.stLjudi++;
            roomService
                .roomPut(temp.sobaId, temp)
                .then(res => console.log(res));
        }
    }
}
</script>

<style scoped>
div{
    border:2px solid black;
    padding: 3px;
    margin: 5px;
}
</style>