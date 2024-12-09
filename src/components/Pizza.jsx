import React, { useState, useEffect } from 'react';

const Pizza = () => {

  const [pizza, setPizza] = useState({});

  const getPizza = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await response.json();
      setPizza(data); 
    } catch (error) {
      console.error('Error al consultar pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []); 
  
  if (!pizza.name) {
    return <div>Cargando...</div>; 
  }
  

  return (
    <div className='container'>
    <div className='containerPizza'>
        <img src={pizza.img}  alt={pizza.name} />
        <div>
            <h1>{pizza.name[0].toUpperCase() + pizza.name.slice(1).toLowerCase()}</h1>
            
            <p>{pizza.desc}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul className='listaIngredientes'>
                {pizza.ingredients && pizza.ingredients.map((ingrediente, indice) => (
                <li key={indice}>{ingrediente}</li>
                ))}
            </ul>
            <div className='precioPizza'>
                <p><strong>Precio: ${pizza.price.toLocaleString()}</strong></p> 
                <button className="btn btn-dark mb-2">Añadir</button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Pizza;