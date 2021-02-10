<template>
        <div class="row container-fluid">
        <div class="col-md-6">
            <Roomss @send-details="updateDetails" />
        </div>
        <div class="col-md-6">
            <RoomWindow :details="room"/>
        </div>
    </div>
    <!-- <div>
        <form @submit="sendData">
            <input><br>
            <input><br>
            <input><br>
            <input><br>
            <button>Submit</button>
            <button type="reset">Reset</button>
        </form>
    </div> -->
</template>

<script>
import Roomss from '../views/Roomss.vue'
import RoomWindow from '../views/RoomWindow.vue'

export default {
    name: "RoomManager",
    components: {
        Roomss,
        RoomWindow
    },
    data() {
        return {
            room: null
        }
    },
    methods: {
        sendData() {
            console.log("hello");
        },
        updateDetails(r) {
            this.room = r;
            console.log(this.room);
        }
    }
}
</script>

<style scoped>
</style>