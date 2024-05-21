import { React, useState } from 'react';
import './Login.css';
import { login } from '../../api/loginService';
import { Navigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../../api/toastService';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      "email": email,
      "password": password
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
          setIsLoggedIn(true);
          toastSuccess("Se ha loggeado exitosamente");
        } else {
          console.log(response.data);
          toastError("Los datos son incorrectos.");
          cleanForm();
        }

      })
      .catch(error => {
        console.error('Error:', error);
        toastError(error.message);
      }
      );
  }

  const cleanForm = () => {
    setEmail("");
    setPassword("");
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

        {isLoggedIn ? <Navigate to="/home" /> : null}

      </div>
    </div>
  )
}

export default Login