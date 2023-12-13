import React from 'react';
import bananrOne from '../../images/homeBannar.jpg'
import './HomePage.css'
import bannarBlack from '../../images/bannarBlack.jpg'
const HomePage = () => {
  return (
    <>
      <div className='home_bannar_one'>
        <img src={bananrOne} alt="" />
      </div>
      <div>
        <h2>The Most Customizable + Solid and Tested Base</h2>
        <p>
          Porto has a huge variety of options and features to create your site, it has also a very solid based that is being improved and tested by professional developers since 2013.</p>
      </div>
      <div className='home_bannar_two'>
        <img src={bannarBlack} alt="" />
      </div>
    </>
  );
};

export default HomePage;