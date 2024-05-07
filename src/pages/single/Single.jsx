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
      </div>
    </div>
  )
}

export default Single