import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { calcularTotal } = useContext(CartContext); 
  const { token, logout } = useContext(UserContext);
  const setActiveclass = ({isActive}) => (isActive ? "btn btn-light" : "btn btn-outline-light");


  return (
    
    <nav className=" menu">
      <div style={{display:'flex', color: "white", gap:".5rem", alignItems:'center'}}>
        <strong>Pizzería Mamma Mia!</strong>
        <NavLink to="/" className={ setActiveclass }>🍕 Home</NavLink>
        

      
        {token ? (
          <>
            <NavLink className={ setActiveclass } to="/profile">  🔓 Profile</NavLink>
            <NavLink to="/" onClick={ logout }  className="btn btn-outline-light">🔒 Logout</NavLink>
          </> 
        ) : (
          <>
            <NavLink to="/login" className={ setActiveclass }>🔐 Login</NavLink>
            <NavLink to="/register" className= { setActiveclass }>🔐 Register</NavLink>
          </>
        )}
        
      </div>

      <div>
        <NavLink to="/cart" className={({isActive}) => (isActive ? "btn btn-info" : "btn btn-outline-info")}>🛒 Total: ${calcularTotal().toLocaleString()}</NavLink>
      </div>
    </nav>
    
  );
};

export default Navbar;
