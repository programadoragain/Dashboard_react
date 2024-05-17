import api from './interceptor';

const SUB_URL= '/api/categoria';
  
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
