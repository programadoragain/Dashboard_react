import { React, useEffect, useState } from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';
import { getSaleCardForWidget, 
         getProductCardForWidget, 
         getOutgoinCardForWidget } from '../../api/dashboardService';

const Home = () => {
  const [saleCard, setSaleCard] = useState({
    title: '',
    value: '',
    percentage: '', 
    arrow: ''  
  });
  const [productCard, setProductCard] = useState({
    title: '',
    value: '',
    percentage: '', 
    arrow: ''  
  });
  const [outgoinCard, setOutgoinCard] = useState({
    title: '',
    value: '',
    percentage: '', 
    arrow: ''  
  });

  const getDataWidget = () => {
    getSaleCardForWidget().then(response => {
      setSaleCard(response.data);  
    }).catch(error => console.log(error.message));
    
    getProductCardForWidget().then(response => {
      setProductCard(response.data);  
    }).catch(error => console.log(error.message));

    getOutgoinCardForWidget().then(response => {
      setOutgoinCard(response.data);  
    }).catch(error => console.log(error.message));
    
  }

  useEffect(() => {
    getDataWidget();
  }, []);

  const dataWidget = [
    {
      title: "VENTAS",
      value: "99.900",
      percentage: "22%",
      arrow: "up"
    },
    {
      title: "GASTOS",
      value: "24.900",
      percentage: "12%",
      arrow: "down"
    },
    {
      title: "PRODUCTOS",
      value: "2",
      percentage: "23%",
      arrow: "up"
    },
    {
      title: "TOTAL",
      value: "99.000",
      percentage: "8%",
      arrow: "up"
    }
  ]

  return (
    <div className="home">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <div className="widgets">
          <Widget data={saleCard} />
          <Widget data={dataWidget[1]} />
          <Widget data={productCard} />
          <Widget data={dataWidget[3]} />
        </div>
        <div className="charts">
          <Features />
          <Chart title="Gráfico mensuale" aspect={2 / 1} />

        </div>
        <div className="list-container">
          <div className="list-title">Ultimas transacciones</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home