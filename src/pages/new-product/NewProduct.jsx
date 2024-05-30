import { React, useState, useEffect } from 'react';
import './NewProduct.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { create, uploadPhoto } from '../../api/productService';
import { getAll } from '../../api/categoryService';
import { toastError, toastSuccess } from '../../api/toastService';
import Button from '@mui/material/Button';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';


const NewProduct = () => {

  const [file, setFile] = useState("");
  const [categoryData, setCategoryData] = useState(null);
  const [formData, setFormData] = useState({
    codBarra: '',
    nombre: '',
    marca: '',
    modelo: '',
    categoria: {id:'', nombre: ''},
    descripcion: '',
    valor: '',
    stock: '',
    activo: true
  });

  const getCategory = () => {
    getAll().then((response) => {
      console.log('Response:', response.data);
      setCategoryData(response.data);
    }).catch((error) => {
      console.log("Error al cargar las categorias")
      toastError("Error al cargar las categorias");
    })
  }

  useEffect(() => {
    getCategory();
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      categoria: {
        ...prevFormData.categoria,
        id: value
      }
    }));
  };

  /*
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      imagen: file
    }));
  };
  */
 
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
      codBarra: '',
      nombre: '',
      marca: '',
      modelo: '',
      categoria: {id:'', nombre: ''},
      descripcion: '',
      valor: '',
      stock: '',
    });
    setFile("");
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
            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <DriveFolderUploadOutlined className="icon" />Seleccionar imagen
            </label>
          </div>
 

          <div className="right">

            <form onSubmit={handleSubmit}>
              <input type="file" 
                     id="file" 
                     name="file"
                     onChange={e => setFile(e.target.files[0])}
                     style={{ display: "none" }} 
                     hidden />

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
                  value={formData.categoria.id}
                  onChange={handleSelectChange}
                  required>

                  <option value=""></option>
                  {Array.isArray(categoryData) && categoryData.map((input) => (
                    <option key={input.id} value={input.id}>{input.nombre}</option>
                  ))}

                </select>
              </div>

              <div className="form-input">
                <label>Precio</label>
                <input type="number"
                  id="valor"
                  name="valor"
                  value={formData.valor}
                  onChange={handleChange}
                  required />
              </div>

              <div className="form-input">
                <label>Cantidad</label>
                <input type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder=''
                  required />
              </div>


            <div className="button-form">
              <button type="submit">
                <SaveAltOutlinedIcon className="icon" size="large"/>
                GUARDAR
              </button>
            </div>

            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct