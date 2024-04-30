import React from 'react';
import "./Widget.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const Widget = ({ data }) => {
    let details;
    console.log(data.percentage);

    switch(data.title) {
        case "VENTAS":
            details= {
                isMoney: true,
                arrowIcon: data.arrow=="up" ? <ArrowOutwardIcon className="i" /> : <ArrowDownwardOutlinedIcon className="i" />,
                link: "Ver listado",
                icon: <StoreOutlinedIcon className='icon' style={{backgroundColor: "rgba(0, 128, 0, 0.2)", color: "black"}} />
            }
            break;
        case "GASTOS":
            details= {
                isMoney: true,
                arrowIcon: data.arrow=="up" ? <ArrowOutwardIcon className="i" /> : <ArrowDownwardOutlinedIcon className="i" />,
                link: "Ver listado",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor: "rgba(255, 0, 0, 0.2)", color: "black"}} />
            }
            break;
        case "PRODUCTOS":
            details= {
                isMoney: false,
                arrowIcon: data.arrow=="up" ? <ArrowOutwardIcon className="i" /> : <ArrowDownwardOutlinedIcon className="i" />,
                link: "Detalles",
                icon: <InventoryOutlinedIcon className='icon' style={{backgroundColor: "rgba(0, 0, 128, 0.2)", color: "black"}} />
            }
            break;    
        case "TOTAL":
            details= {
                isMoney: true,
                arrowIcon: data.arrow=="up" ? <ArrowOutwardIcon className="i" /> : <ArrowDownwardOutlinedIcon className="i" />,
                link: "Ver listado",
                icon: <LocalAtmOutlinedIcon className='icon' style={{backgroundColor: "rgba(0, 128, 0, 0.2)", color: "black"}} />
            }
            break;
        default:
            break;    
    }


    return (
        <div className='widget'>
            <div className='left'>
                <div className='title'> {data.title} </div>
                <div className='data'> {details.isMoney ? "$ " + data.value : data.value } </div>
                <div className='link'> {details.link} </div>
            </div>
            <div className='right'>
                <div className='porcentage positive'>
                    {details.arrowIcon}
                    <span>{data.percentage}</span>
                </div>
                <div className='icon'>
                    { details.icon }
                </div>
            </div>
        </div>
    )
}

export default Widget