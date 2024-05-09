import React from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Features from '../../components/features/Features';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';

const Home = () => {
  const dataWidget = [
    {
      title: "VENTAS",
      value: "123.900",
      percentage: "30%",
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
      value: "19",
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