import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { calcularTotal } = useContext(CartContext); 
  const token = false;

  return (
    
    <nav className=" menu">
      <div style={{display:'flex', color: "white", gap:".5rem", alignItems:'center'}}>
        <strong>Pizzería Mamma Mia!</strong>
        <Link to="/" className="btn btn-outline-light">🍕 Home</Link>
        

      
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
            <Link to="/" className="btn btn-outline-light">🔒 Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
          </>
        )}
      </div>

      <div>
        <Link to="/cart" className="btn btn-outline-info">🛒 Total: ${calcularTotal().toLocaleString()}</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
