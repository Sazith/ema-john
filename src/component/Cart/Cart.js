import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Inventory from '../../Pages/Inventory';


const Cart = (props) => {
  const cart = props.cart;
   // const total = cart.reduce((total,prd)=>total + prd.price,0)
   let total = 0;
   for (let index = 0; index < cart.length; index++) {
    const product = cart[index];
    total = total + product.price;
   }

   let shipping = 0;
   if(total > 1000) {
    shipping = 0;
   }
   else if(total>500) {
    shipping = 50;
   }
   else if(total>0){
    shipping = 100;
   }

   const tax = (total/10).toFixed(2);
   const grandTotal = (total + shipping + Number(tax)).toFixed(2);

   const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision)
   }

  return (
    <div>
       <h4>This is cart</h4>
       <p>Items ordered : {cart.length}</p>
       <p>Product Price : {formatNumber(total)}</p>
       <p><small>Shipping Cost : {shipping} </small></p>
       <p><small>Tax + vat :{tax} </small></p>
       <p>Total Price : {grandTotal}</p>
       <Link to='/inventory' >
       <button className='main-button'>
        Review Order : 
        </button>
       </Link>
       <Routes>
        <Route path="/inventory" element={<Inventory />} /> 
         </Routes>
    </div>
  )
}

export default Cart;