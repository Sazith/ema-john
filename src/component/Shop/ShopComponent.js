import React, { useEffect, useState } from 'react';
import './ShopComponent.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const ShopComponent = () => {
  const BaseURL = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON';
  const [products,setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect((() =>{
    fetch(BaseURL)
    .then(res => res.json())
    .then(data => setProducts(data)
    )
  }),[])

    
  const handleAddrpoduct = (product) => {
    const newCart  = [...cart,product];
    setCart(newCart);
  }


  return (
    <div className='shop-container'>
    <div className="product-container">
      {
        products.map((product, i) => (
          <Product product={product} key={i} handleAddrpoduct={handleAddrpoduct}></Product>
        ))
      }
    
    </div>
    <div className="cart-container">
     <Cart cart={cart}/>
    </div>
  </div>
  );
};

export default ShopComponent;