import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    
    <nav className=" menu">
      <div style={{display:'flex', color: "white", gap:".5rem", alignItems:'center'}}>
        <strong>Pizzería Mamma Mia!</strong>
        <button className="btn btn-outline-light">🍕 Home</button>
        

      
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>

      <div>
        <button className="btn btn-outline-info">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
    
  );
};

export default Navbar;
