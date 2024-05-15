import axios from "axios";

const API_URL= 'http://localhost:8081/api/usuario';
  
const HEADERS_CONTENT = {
'Content-Type': 'application/json',
'Access-Control-Allow-Origin': 'http://localhost:3000'
};

export async function login(credentials) {
    return await axios.post(API_URL + '/login', credentials, { headers : HEADERS_CONTENT });
}

export async function register(data) {
    return await axios.post(API_URL + '/registrar', data, { headers : HEADERS_CONTENT });
}


