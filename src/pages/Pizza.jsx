import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {

  const { id } = useParams();

  const [pizza, setPizza] = useState([]);

  const getPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizza(data); 
    } catch (error) {
      console.error('Error al consultar pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []); 
  
  
  const pizzaActual = pizza.find( (p) => p.id === id);

  if (!pizzaActual) {
    return <div>Cargando...</div>; 
  }

    return (
      <div className='pageContainer'>
      <div className='pizzaContent'>
          <img src={pizzaActual.img}  alt={pizzaActual.name} />
          <div className='pizzaText'>
              <h1>{pizzaActual.name[0].toUpperCase() + pizzaActual.name.slice(1).toLowerCase()}</h1>
              
              <p>{pizzaActual.desc}</p>
              <p><strong>Ingredientes:</strong></p>
              <ul className='listaIngredientes'>
                  {pizzaActual.ingredients && pizzaActual.ingredients.map((ingrediente, indice) => (
                  <li key={indice}>{ingrediente}</li>
                  ))}
              </ul>
              <div className='precioPizza'>
                  <p><strong>Precio: ${pizzaActual.price.toLocaleString()}</strong></p> 
                  <button className="btn btn-dark mb-2">Añadir</button>
              </div>
          </div>
      </div>
      </div>
    );
  

};

export default Pizza;