import api from './interceptor';

const SUB_URL= '/api/usuario';
  
export async function login(credentials) {
    return await api.post(SUB_URL + '/login', credentials);
}
