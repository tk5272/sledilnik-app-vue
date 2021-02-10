import axios from 'axios';

export default class RoomService {
    
    roomGetAll = () => {
        return axios
            .get('http://localhost:8080/v1/sobe')
            .then(res => res)
            .catch(err => console.log(err))
    
    }
    
    roomGet = (room_id) => {
        axios
        .get('http://localhost:8080/v1/sobe/' + room_id)
        .then(res => res)
        .catch(err => console.log(err))

    }

    roomDelete = (room_id) => {
        axios
        .delete('http://localhost:8080/v1/sobe/' + room_id)
        .then(res => res)
        .catch(err => console.log(err))

    }

    roomPost = (room) => {
        axios
        .post('http://localhost:8080/v1/sobe', room)
        .then(res => res)
        .catch(err => console.log(err))

    }

    roomPut = (roomId, payload) => {
        console.log(roomId, payload);
        return axios
        .put('http://localhost:8080/v1/sobe/'+roomId, payload)
        .then(res => res)
        .catch(err => console.log(err))

    }
}