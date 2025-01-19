import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const email = 'usuario@ejemplo.com'; 
  const { logout } = useContext(UserContext);

  return (
    <div className="pageContainer">
      <div className="pageContent">
        <h1>Bienvenido,</h1>
        <p className="profileEmail">{email}</p> 
        <Link to="/" onClick={ logout } className="btn btn-primary">Cerrar sesión</Link>
      </div>
    </div>
  );
}

export default Profile;
