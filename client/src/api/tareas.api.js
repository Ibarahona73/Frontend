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

export const createTarea = (tarea) => {
    return api.post('/api/v1/tareas/', tarea)  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error creating tarea:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
  }

  export const updateTarea = (id, tarea) => {
    return api.put(`/api/v1/tareas/${id}/`, tarea)  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error updating tarea:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
  }

export const deleteTarea = (id) => {
    return api.delete(`/api/v1/tareas/${id}/`)  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error deleting tarea:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
  }

export const getTareaById = (id) => {
    return api.get(`/api/v1/tareas/${id}/`)  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching tarea by ID:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
  }

export const getTareasByEstado = (estado) => {
    return api.get(`/api/v1/tareas/?estado=${estado}`)  // Asegúrate de que esta ruta coincida con tu backend
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching tareas by estado:', error);
        throw error; // Propaga el error para manejarlo en el componente
      });
  }
