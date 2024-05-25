import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import NewUser from './pages/new-user/NewUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewProduct from './pages/new-product/NewProduct';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List title="Listado de usuarios" buttonName="+ Nuevo usuario" linkTo="/users/new" />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="products">
              <Route index element={<List title="Listado de productos" buttonName="+ Nuevo producto" linkTo="/products/new" />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </div>
  );
}

export default App;
