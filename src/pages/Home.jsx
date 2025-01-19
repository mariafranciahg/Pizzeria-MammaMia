import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';


const Home = () => {

  const [pizzas, setPizzas] = useState ([]);
  const { handleAgregar } = useContext(CartContext);

  const getPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Error al consultar pizza:', error);
    }
  };

  useEffect(() => {
    getPizzas();
  },  []); 

  return (
    <div>
      <Header />

      <div className='tarjetas'>
        {pizzas.map((pizza) => {
          
          return (
            <div key={pizza.id}> 
              <CardPizza
                id={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                img={pizza.img}
                addCart={ (id) => handleAgregar(id, pizza)}
              />  
            </div>
          );
        })}
      </div>
    </div>
  );
};

      
export default Home;
