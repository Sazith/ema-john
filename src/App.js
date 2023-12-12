
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png'
import Inventory from './Pages/Inventory';
import Manage from './Pages/Manage';
import Shop from './Pages/Shop';
function App() {
  return (
    <div className='header'>
       <img src={logo} alt="" />
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/inventory">Review</Link></li>
          <li><Link to="manage">Manage Inventory</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    
    </div>
  );
}

export default App;
