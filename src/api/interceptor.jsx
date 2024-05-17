import axios from 'axios';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: 'http://localhost:8081',
});

// Añadir un interceptor de solicitud
api.interceptors.request.use(
  (config) => {
    
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    
    var token= localStorage.getItem('token');
    if (token) { config.headers['Authorization'] = `Bearer ${token}`; }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;