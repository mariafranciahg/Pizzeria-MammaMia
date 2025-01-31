import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { logout, datoUsuario } = useContext(UserContext);
 
  
  if (!datoUsuario || !datoUsuario.email) {
    return <div>Cargando perfil...</div>;
  
  }

  return (
    <div className="pageContainer">
      <div className="pageContent">
        <h1>Bienvenido,</h1>
        <p className="profileEmail">{datoUsuario.email}</p> 
        <Link to="/" onClick={ logout } className="btn btn-primary">Cerrar sesión</Link>
      </div>
    </div>
  );

}
export default Profile;
