import React from 'react'
import './Features.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';

const Features = () => {
  return (
    <div className='features'>
      <div className="top">
        <h1 className='title'>Total ganancias</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="features-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
          <p className="title">Ventas mensuales</p>
          <p className="amount">$2.500.000</p>
          <p className="desc">Pueden existir transacciones bancarias pendientes</p>
        </div>
      </div>
    </div>
  )
}

export default Features