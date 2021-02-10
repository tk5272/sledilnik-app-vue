<template>
    <!--
    <p>Get params from route: {{ roomId }}</p>
    <p>Get params from route: {{ id }}</p> -->
    <div class="gradient">
        <h1>{{ room.imeSobe }}</h1>
        <p>{{ room.opis }}</p>
    </div>
    <div class="padded">
        <span v-if="room.osebe">Danes z vami: {{room.osebe.ime}} {{room.osebe.priimek}}</span><br>
        <span>zasedenost: {{ room.stLjudi }} / {{ room.maxLjudi }}</span><br>
        <span>velikost: {{ room.velikost }} m<sup>2</sup></span>
    </div>
    <hr>
    <div class="imagee">
        <img v-for="image in images" :key="image.id"
            :src="image.urls.thumb" :alt="images.alt_description"
        >
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            roomId: this.$route.params.id,
            room: [],
            images: []
        }
    },
    props: ['id'],
    created() {
        axios
            .get('http://localhost:8080/v1/sobe/'+this.id)
            .then(res => {
                this.room = res.data;
                console.log(this.room);
                this.rooms = res.data;
                axios
                    .get('http://localhost:8080/v1/podatki/slike/'+this.room.kljucnaBeseda)
                    .then(res => {
                        this.images = res.data.results;
                        console.log(this.images);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.gradient {
    background: #4B79A1;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #283E51, #4B79A1);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #283E51, #4B79A1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    padding: 15px;
    padding-top: 50px;
    margin-bottom: 10px
}

.padded {
    padding:10px;
    margin-left:10px;
}

.gradient p {
    font-size: 20px;
}

.imagee :hover {
    transform:scale(1.2);
}

.imagee {
    text-align: center;
}

.imagee img {
    margin: 20px;
    transition: transform .2s; /* Animation */
    width: 250px;
    height: 250px;
}

</style>