import api from './interceptor';

const SUB_URL= '/api/usuario';
  
export async function create(data) {
    return await api.post(SUB_URL + '/registrar', data);
}

export async function update(data) {
    return await api.post(SUB_URL + '/actualizar', data);
}

export async function deleteById(id) {
    return await api.post(`${SUB_URL}/eliminar/${id}`);
}

export async function getAll() {
    return await api.get(SUB_URL + '/listar');
}

/* -- Pendiente en backend --
export async function getAllById(id) {
    return await api.get(`${SUB_URL}/obtener/${id}`);
}
*/