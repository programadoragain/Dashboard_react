import axios from 'axios';

// Función para configurar el token en Axios
const setAuthToken = (token) => {
  if (token) {
    // Si hay un token, se configura en el encabezado de autorización de Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Si no hay token, se elimina el encabezado de autorización de Axios
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Interceptor para ejecutar antes de cada solicitud saliente
axios.interceptors.request.use(
  (config) => {
    // Obtener el token del almacenamiento local, podrías tener tu propia lógica aquí
    const token = localStorage.getItem('token');
    // Configurar el token en la solicitud
    setAuthToken(token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Aquí puedes exportar axios para utilizarlo en toda tu aplicación
export default axios;