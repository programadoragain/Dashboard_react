import { React, useEffect, useState } from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';
import { getSaleCardForWidget, getProductCardForWidget } from '../../api/dashboardService';

const Home = () => {
  const [saleCard, setSaleCard] = useState('');
  const [productCard, setProductCard] = useState('');

  const getDataWidget = async () => {
    try {
      const { data } = await getSaleCardForWidget();
      setSaleCard(data);
      console.log(data);
      data = await getProductCardForWidget();
      setProductCard(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataWidget();
  })

  const dataWidget = [
    {
      title: saleCard.titulo, //dataWidget.title
      value: saleCard.valor, //dataWidget.value
      percentage: saleCard.percentage, //dataWidget.porcentage
      arrow: saleCard.arrow //dataWidget.arrow
    },
    {
      title: "GASTOS",
      value: "24.900",
      percentage: "12%",
      arrow: "down"
    },
    {
      title: "PRODUCTOS",
      value: productCard.valor,
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
          <Widget data={dataWidget[0]} />
          <Widget data={dataWidget[1]} />
          <Widget data={dataWidget[2]} />
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