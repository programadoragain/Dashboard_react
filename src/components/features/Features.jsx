import React from 'react'
import './Features.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Features = () => {
  return (
    <div className='features'>
      <div className="top">
        <h1 className='title'>Total ganancias</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="features-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>  

        <p className="title">Ventas mensuales</p>
        <div className="data">
          <p className="amount">$ 2.500.000</p>
          <div className="icon"><ArrowUpwardIcon /></div>
        </div>  

        <div className="summary">
          <div className="item">
            <div className="item-title">Mes anterior</div>
            <div className="item-result">$ 1.200.300</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features