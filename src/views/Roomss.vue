<template>
   <div v-for="room in rooms" :key="room.sobaId" class="container-fluid roomhover">
        <div @click="sendDetails(room)" class="room">
            <h2>{{ room.imeSobe }}</h2>
            <p>{{ room.opis }}</p>
        </div>
        <!-- <router-link v-bind="room" :to="{ name: 'RoomDetails', params: { id: room.sobaId } }"> -->
        <!-- </router-link> -->
  </div>
</template>

<script>
import RoomService from '../services/RoomService.js'

const roomService = new RoomService();

export default {
    name: "Roomss",
    emits: ["send-details"], 
    data() {
        return {
            rooms: []
        }
    },
    methods: {
        sendDetails(roomId) {
            console.log("hello", roomId);
            this.$emit('send-details', roomId);
        },
        getRooms() {
            roomService
                .roomGetAll()
                .then(res => {
                    console.log(res);
                    this.rooms = res.data;
                })
        }
    },
    created() {
        this.getRooms();
    }
}
</script>
<style scoped>
.room {
    margin-top: 2px;
    padding: 10px;
}

.roomhover :hover {
    background-color: yellowgreen;
}

</style>