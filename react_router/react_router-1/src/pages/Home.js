import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate =useNavigate();
  function navigateHandler(){
    navigate('/products')
  }
  return (
    <>
    <h1>Home</h1>
    <p>Go to <Link to="products">the list of Products</Link>.</p>
    <p>
      <button onClick={navigateHandler}>Navigate to Product</button>
    </p>
    </>
  )
}

export default HomePage;
