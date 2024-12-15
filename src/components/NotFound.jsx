import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/img/notfound.png'; 


const NotFound = () => {

  return (
    <div className="pageContainer">
      <div className="pageContent">
        <img 
          src={notFound} 
          alt="404" 
          className="notFoundImg" 
        />
        <h1 className="notFoundTitle">¡Ups! Página no encontrada</h1>
        <p className="notFoundText">
          La página que buscas no existe. Puede que se haya mudado o nunca haya existido.
        </p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
