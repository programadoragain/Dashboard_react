import { React, useState } from 'react';
import './NewProduct.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { create } from '../../api/productService';
import { getAll } from '../../api/categoryService';
import { toastError, toastSuccess } from '../../api/toastService';


const NewProduct = () => {

  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    nombre: '',
    marca: '',
    modelo: '',
    categoria: '',
    descripcion: '',
    precio: '',
  });
  const [categoryData, setCategoryData] = useState("");

  const getCategory = () => {
    getAll().then((response) => {
    console.log('Response:', response.data);
    setCategoryData(response);
    }).catch((error) => {
      console.log("Error al cargar las categorias")
      toastError("Error al cargar las categorias");
    })
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    create(formData.append({imagen: file})) //verificar append
      .then(response => {
        console.log('Response:', response.data);
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
        marca: '',
        modelo: '',
        categoria: '',
        descripcion: '',
        precio: '',
        imagen: ''
    });
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="title">
          <h4>Agregar nuevo producto</h4>
        </div>
        <div className="bottom">

          <div className="left">
            <img
              src={(file) ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
            <label htmlFor="file" style={{cursor:"pointer"}}>
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
                <label>Marca</label>
                <input type="text"
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Modelo</label>
                <input type="text"
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Categoria</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required>
                    <option value=""></option>
                    <option value="volvo">Computadoras</option>
                    <option value="saab">Auriculares</option>
                    <option value="opel">Pendrives</option>     
                </select>
              </div>

              <div className="form-input">
                <label>Precio</label>
                <input type="number"
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Cantidad</label>
                <input type="number"
                  id="cantidad"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={handleChange}
                  placeholder=''
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

export default NewProduct