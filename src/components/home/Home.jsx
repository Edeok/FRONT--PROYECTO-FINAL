/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { getProducts } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = (props) => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);

  useEffect(() => {
    // Llamada a la acción getProducts al montar el componente
    dispatch(getProducts(true));
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>PetMart</h1>
      {products.map((i) => (
    
         <Link to={`/detail/${i.id}`}>
        <div key={i.id} className="product-card">
          <img src={i.image} alt={i.name} className="product-image" />
          <h2>{i.name}</h2>
          <p>{i.description}</p>
          <p>Precio: {i.price}</p>
         
        </div>
         </Link>
      ))}
     
    </div>
  );
};

export default Home;
