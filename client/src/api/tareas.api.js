import axios from 'axios';

{/*export const TareasAll= () => {
    return axios.get('https://backend-ny2d.onrender.com/api/v1/tareas/')
*/}   

const api = axios.create({
    baseURL: 'https://backend-ny2d.onrender.com', // URL base de tu backend
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

export const getTareas = () => {
    return api.get('/api/v1/tareas/')  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching tareas:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
    }