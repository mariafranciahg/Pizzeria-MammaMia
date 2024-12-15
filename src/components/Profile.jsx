import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const email = 'usuario@ejemplo.com'; 

  return (
    <div className="pageContainer">
      <div className="pageContent">
        <h1>Bienvenido,</h1>
        <p className="profileEmail">{email}</p> 
        <Link to="/" className="btn btn-primary">Cerrar sesión</Link>
      </div>
    </div>
  );
}

export default Profile;
