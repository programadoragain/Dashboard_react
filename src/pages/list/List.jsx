import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import ProducTablePrime from '../../components/table/ProducTablePrime';

const List = ({ title, buttonName, linkTo }) => {

  return (
    <div className='list'>
      <Sidebar />
      <div className='list-container'>
        <Navbar />

        <div className="top-container">
          <div className='title'>
            {title}

            <Link to={linkTo} className='link-button'>
              {buttonName}
            </Link>

          </div>
        </div>

        {/* <Datatable /> */}
        <ProducTablePrime />
      </div>
    </div>
  )
}

export default List