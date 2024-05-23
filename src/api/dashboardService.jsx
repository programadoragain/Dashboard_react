import api from './interceptor';

const SUB_URL= '/api/dashboard';
  
export async function getSaleCardForWidget() {
    return await api.get(SUB_URL + '/dataWidget/ventas');
}

export async function getProductCardForWidget() {
    return await api.get(SUB_URL + '/dataWidget/productos');
}

export async function getOutgoinCardForWidget() {
    return await api.get(SUB_URL + '/dataWidget/gastos');
}