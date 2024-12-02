import React from 'react'
import {pizzaCart} from '../data/pizzas.js'
import {useState} from 'react';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const handleAgregar = (indice) => {
        const newCart = [...cart];
        newCart[indice].count++;
        setCart(newCart);
    };

    const handleQuitar = (indice) => {
        const newCart = [...cart]; 
        if (newCart[indice].count > 0) {
            newCart[indice].count--; 
        }
       
        setCart(newCart.filter((pizza) => pizza.count > 0));
    };

    const calcularTotal = () => {
        let total = 0; 
        cart.forEach((item) => {
            total += item.price * item.count; 
        });
        return total;
    };
    

  return (
    <div style={{padding:"8rem 20rem", textAlign:"left"}}>
        <h3 style={{paddingBottom: "3rem"}}>Detalles del pedido:</h3>
      {
        cart.map((item, indice) => {
          return (
            <div key={item.id} className='item' > 
               
                    <div className='itemPizza'>
                        <img src={item.img} alt={item.name} style={{width: "7rem"}}/> 
                        <h5>{item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}</h5>
                    </div>
                    <p>{item.price.toLocaleString()}</p>
               
                <div style={{ display: "flex", gap: "2rem", padding: "1.2rem"}}>
                    <button className='botonMenos' onClick={() => handleQuitar(indice)}>-</button>
                    <p>{item.count}</p>
                    <button className='botonMas' onClick={() => handleAgregar(indice)}>+</button>
                </div>
            </div>
          );
        })
      }
      <div style={{ marginTop: '2rem' }}>
                <h3>Total: ${calcularTotal().toLocaleString()}</h3>
            </div>
    </div>
  )
}

export default Cart;
