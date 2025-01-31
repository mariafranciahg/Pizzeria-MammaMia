import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const { cart, handleAgregar, handleQuitar, calcularTotal, enviarCarrito } = useContext(CartContext); 
const navigate = useNavigate();
const { token } = useContext(UserContext);

  return (
    <div className='pageContainer'>
      <div className='pageContent'>
        <h3>Detalles del pedido:</h3>

        <div className="cartContent">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cart.map((item, indice) => (
              <div key={item.id} className="itemCart">
                <div className="itemName">
                  <img src={item.img} alt={item.name} style={{ width: '7rem' }} />
                  <h5>{item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}</h5>
                </div>

                <div className="itemPrice">
                  <p>{item.price.toLocaleString()}</p>
                  <div className="itemButton">
                    <button className="botonMenos" onClick={() => handleQuitar(indice)}>-</button>
                    <p>{item.count}</p> 
                    <button className="botonMas" onClick={() => handleAgregar(item.id, item)}>+</button> 
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Total: ${calcularTotal().toLocaleString()}</h3>
        </div>
        { token ? (
          <button onClick={enviarCarrito} className='btn btn-primary'> Pagar </button> 
          ) : (
            <button onClick={ () => navigate (`/login`)} className='btn btn-secondary'> Inicia sesión para pagar </button>
          ) }
      </div>
    </div>
  )
}

export default Cart;
