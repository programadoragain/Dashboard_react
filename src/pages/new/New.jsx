import React from 'react';
import './New.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = (inputs, title) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h4>{title}</h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Imagen: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="form-input">
                <label>Nombre: </label>
                <input type="text" placeholder="Fernando" />
              </div>
              <div className="form-input">
                <label>Apellido: </label>
                <input type="text" placeholder="Diaz" />
              </div>
              <div className="form-input">
                <label>Email: </label>
                <input type="text" placeholder="ferdiaz@gmail.com" />
              </div>
              <div className="form-input">
                <label>Password: </label>
                <input type="password" placeholder="*********" />
              </div>
              <div className="form-input">
                <label>Telefono: </label>
                <input type="text" placeholder="2984 868686" />
              </div>
              <div className="form-input">
                <label>Dirección: </label>
                <input type="text" placeholder="Tucumán 815" />
              </div>
              <div className="form-input">
                <label>Ciudad: </label>
                <input type="text" placeholder="Gral. Roca" />
              </div>
              
            </form>
            <button action="">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New