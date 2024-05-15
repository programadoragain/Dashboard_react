import { React, useState } from 'react';
import './Login.css';
import { login } from '../../api/loginService';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      "email" : email,
      "password" : password
    };
      
    login(credentials)
      .then(response => {
        // Maneja la respuesta aquí
        console.log('Respuesta:', response.data);
        const token = response.data.token;
        if (token !== undefined) {
          localStorage.setItem('token', token);
          setEmail("");
          setPassword("");
        } else {
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">Error de conexión, intente nuevamente.</Alert>
            </Stack> 
        }  
        
      })
      .catch(error => {
        // Maneja los errores aquí
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">Error de conexión, intente nuevamente.</Alert>
        </Stack>  
        console.error('Error:', error);
      }
    );

  }

  return (
    <div className="login">
      <div className='login-container'>

        <h1>Website Computación</h1>
        <h4>Ingrese sus credenciales</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="first">Email: </label>
          <input type="text" id="first" name="first" value={email}
            onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Clave: </label>
          <input type="password" id="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />


          <div className="wrap">
            <button type="submit">
              Ingresar
            </button>
          </div>


        </form>

      </div>
    </div>
  )
}

export default Login