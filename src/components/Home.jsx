import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import {pizzas} from '../data/pizzas.js';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='tarjetas'>
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.id}> 
              <CardPizza
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                img={pizza.img}
              />  
            </div>
          );
        })}
      </div>
    </div>
  );
};

      
export default Home;
