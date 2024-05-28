import axios from 'axios';
import api from './interceptor';

const SUB_URL = '/api/producto';

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

export async function uploadPhoto(dataUpload) {
    const multipartFileCall = axios.create({
        baseURL: 'http://localhost:8081',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    });

    return await multipartFileCall.put(SUB_URL + '/upload-photo', dataUpload);
}

export async function getPhoto(dir) {
    const photoCall = axios.create({
        baseURL: 'http://localhost:8081',
        headers: {
            'Content-Type': 'image/jpeg',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        responseType: 'blob',
    });

    return await photoCall.get(`${SUB_URL}/get-photo/${dir}`);
}

/*
export async function fetchImage(path) {
    try {
        const response = await fetch(`http://localhost:8081/api/producto/get-photo/${path}`, {
            method: 'GET',
            credentials: 'include', // Incluye credenciales como cookies si es necesario
            headers: {
                'Content-Type': 'image/jpeg', // Ajusta esto según el tipo de imagen que estás solicitando
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    } catch (error) {}
}
*/