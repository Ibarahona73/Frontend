import axios from 'axios';

export const TareasAll= () => {
    return axios.get('https://backend-ny2d.onrender.com/api/v1/tareas/')
}   