
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png'
import Inventory from './Pages/Inventory';
import Manage from './Pages/Manage';
import Shop from './Pages/Shop';
import { NotFound } from './Pages/NotFound';
import { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import Home from './Pages/Home';
import ProductDetails from './component/ProductDetails/ProductDetails';

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
  justifyContent:"center",
  alignItem:'center',
  position:'absolute',
  top:'50%',
  left:'50%'
};

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },1000)
  },[])
  return (
    <>
      {
        loading ?
          <PacmanLoader
            color={'#18eaff'}
            loading={loading}
            cssOverride={override}
            size={48}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <div className='header'>
            <Link to="/home">
            <img src={logo} alt="" />
            </Link>
            <nav>
              <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/inventory">Review</Link></li>
                <li><Link to="manage">Manage Inventory</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/product/:productKey" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      }
  
    </>
  );
}

export default App;
