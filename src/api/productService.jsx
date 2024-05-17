import api from './interceptor';

const SUB_URL= '/api/producto';
  
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

export async function getAllById(id) {
    return await api.get(`${SUB_URL}/obtener/${id}`);
}

export async function getAllByStock() {
    return await api.get(SUB_URL + '/listarenstock');
}

export async function getAllByCategory(id) {
    return await api.get(`${SUB_URL}/listarporcategoria/${id}`);
}

