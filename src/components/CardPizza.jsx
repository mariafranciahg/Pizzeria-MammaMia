import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ id, nombre, precio, ingredientes, img, addCart }) => {
  const navigate = useNavigate();
  const handlerAddCart = () => addCart(id);
  const handlerVerMas = () =>  navigate (`/pizza/${id}`);
    return (
      <div className="card shadowCard" style={{ width: "18rem", margin: "10px", padding:0}}>
        <img src={img} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre[0].toUpperCase() + nombre.slice(1).toLowerCase()}</h5>
          <p className="pXs mb-0"> <strong>Ingredientes:</strong> </p>
          <ul className='pXs listaIngredientes'>
            {ingredientes.map((ingrediente, indice) => (
              <li key={indice}>{ingrediente}</li>
            ))}
          </ul>
          <p className="card-text"> <strong>Precio: ${precio.toLocaleString()}</strong></p>
          <button onClick={ handlerVerMas } className="btn btn-light mt-2" style={{border: "solid 1px black"}}>Ver más</button>
          <button className="btn btn-dark mt-2 ms-2" onClick={handlerAddCart}>Añadir</button>
        </div>
      </div>
    );
  };
export default CardPizza;
