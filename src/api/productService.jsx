import axios from "axios";

const API_URL= 'http://localhost:8081/api/producto';
  
export async function create(data, token) {
    var headersContent = {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': 'http://localhost:3000',
                            'Authorization' : 'Bearer: ' + token
                         };

    return await axios.post(API_URL + '/registrar', credentials, { headers : headersContent });
}