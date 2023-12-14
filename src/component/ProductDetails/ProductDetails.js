import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
  const {productKey} = useParams()
  const BaseURL = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON';
  const [products,setProducts] = useState([]);
  useEffect((() =>{
    fetch(BaseURL)
    .then(res => res.json())
    .then(data => setProducts(data)
    )
  }),[])
  const productFind = products.find(pd => pd?.key === productKey)
  if (!productFind) return 'Loading..........'
  console.log(productFind)
  return (
    <div>
      <h1>Your Product Detail</h1>
      <Product showAddtoCart={false} product={productFind}></Product>
    </div>
  );
};

export default ProductDetails;