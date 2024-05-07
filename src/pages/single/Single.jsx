import React from 'react'
import './Single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='edit-button'>Edit</div>
            <h2 className='title'>Information</h2>
            <div className='item'>
              <img src="https://img.freepik.com/fotos-premium/retrato-hermosa-joven-hispana-sonriendo-camara_900706-32539.jpg?size=626&ext=jpg" alt="" className="item-image" />
              <div className='details'>
                details
              </div>
            </div>
          </div>
          <div className='right'>
            sasdasd
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Single