import { React, useState } from 'react';
import './New.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="bottom">

          <div className="left">
            <img
              src={(file) ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
            <label htmlFor="file">
              <DriveFolderUploadOutlined className="icon" />Imagen
            </label>
          </div>

          <div className="right">
            <form>
              <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} hidden/>
          
              {inputs.map(input => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </form>
            <button action="">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New