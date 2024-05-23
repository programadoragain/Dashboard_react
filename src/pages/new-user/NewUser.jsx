import { React, useState } from 'react';
import './NewUser.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { create, uploadPhoto } from '../../api/userService';
import { toastError, toastSuccess } from '../../api/toastService';

const NewUser = () => {

  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    create(formData)
      .then(response => {
        const dataUpload = new FormData();
        dataUpload.append('id', response.data.id);
        dataUpload.append('file', file);

        uploadPhoto(dataUpload)
          .then(response => {
            console.log("Imagen cargada correctamente");
          })
          .catch(error => console.log(error.message));

        cleanForm();
        toastSuccess("Se ha registrado exitosamente");
      })
      .catch(error => {
        console.log(error);
        toastError(error.message);
      });
  }

  function cleanForm() {
    setFormData({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });
    setFile("");
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="title">
          <h4>Agregar nuevo usuario</h4>
        </div>
        <div className="bottom">

          <div className="left">
            <img
              src={(file) ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
            <label htmlFor="file">
              <DriveFolderUploadOutlined className="icon" />Seleccionar imagen
            </label>
          </div>

          <div className="right">

            <form onSubmit={handleSubmit}>
              <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} hidden />

              <div className="form-input">
                <label>Nombre</label>
                <input type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Apellido</label>
                <input type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Email</label>
                <input type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Contraseña</label>
                <input type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required />
              </div>
            
              <button type="submit">Guardar</button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewUser