import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>WS App</span>
        </Link>
      </div>

      <hr />

      <div className='center'>
        <ul>
          <p className='title-items'>INICIO</p>
          <Link to="/" className='links'>
            <li>
              <DashboardOutlinedIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title-items'>REGISTRO</p>
          <li>
            <MonetizationOnOutlinedIcon className='icon' />
            <span>Ventas</span>
          </li>
          <li>
            <SellOutlinedIcon className='icon' />
            <span>Compras</span>
          </li>
          <p className='title-items'>LISTADOS</p>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <LocalActivityOutlinedIcon className='icon' />
              <span>Productos</span>
            </li>
          </Link>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <GroupOutlinedIcon className='icon' />
              <span>Usuarios</span>
            </li>
          </Link>
          <li>
            <AssessmentOutlinedIcon className='icon' />
            <span>Informes</span>
          </li>
          <p className='title-items'>CONFIGURACIÓN</p>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Ajustes</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Salir</span>
          </li>
        </ul>
      </div>

      <div className='bottom'>
      </div>

    </div>
  )
}

export default Sidebar