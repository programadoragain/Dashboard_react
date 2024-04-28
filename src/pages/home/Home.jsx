import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-container">container</div>
    </div>
  )
}

export default Home