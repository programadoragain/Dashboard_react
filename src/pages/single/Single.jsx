import React from 'react'
import './Single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='edit-button'>Edit</div>
            <h2 className='title'>Información</h2>
            <div className='item'>
              <img src="https://img.freepik.com/fotos-premium/retrato-hermosa-joven-hispana-sonriendo-camara_900706-32539.jpg?size=626&ext=jpg" alt="" className="item-image" />
              <div className='details'>
                <h3 className='item-title'>Fernando Daniel Diaz</h3>
                <div className='detail-item'>
                  <span className='item-key'>Email: </span>
                  <span className='item-value'>ferd@gmail.com </span>
                </div>
                <div className="detail-item">
                  <span className='item-key'>Telefono: </span>
                  <span className='item-value'>2984564756 </span>
                </div>
                <div className="detail-item">
                  <span className='item-key'>Ciudad: </span>
                  <span className='item-value'>Gral. Roca </span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart title="Gráfico de ventas" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
            <h2 className="title">Productos vendidos</h2>
            <List />
          </div>
      </div>
    </div>
  )
}

export default Single