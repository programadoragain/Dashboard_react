import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
          <div className='search'>
            <input type="text" placeholder="Search ..." />
            <SearchIcon />
          </div>
          <div className='items'>
            <div className='item'>
              <NightlightIcon className='icon' />
            </div>
            <div className='item'>
              <NotificationsNoneIcon className='icon' />
            </div>
            <div className='avatar'>
              <img src="https://img.freepik.com/fotos-premium/retrato-hermosa-joven-hispana-sonriendo-camara_900706-32539.jpg?size=626&ext=jpg" alt="avatar" className='avatar'></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar