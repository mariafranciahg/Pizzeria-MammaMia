import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
  
    const handleAgregar = (id, pizza) => {
      const newCart = [...cart];
      const pizzaIndex = newCart.findIndex((pizzaInCart) => pizzaInCart.id === id);
  
      if (pizzaIndex >= 0) {
        newCart[pizzaIndex].count++;  
      } else {
        newCart.push({ ...pizza, count: 1 }); 
      }
  
      setCart(newCart); 
    };
  
    const handleQuitar = (indice) => {
      const newCart = [...cart];
      
      if (newCart[indice].count > 1) {
        newCart[indice].count--; 
      } else {
        newCart.splice(indice, 1); 
      }
  
      setCart(newCart);
    };
  
    const calcularTotal = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.count; 
      });
      return total;
    };
  
    return (
      <CartContext.Provider value={{cart, setCart, handleAgregar, handleQuitar, calcularTotal}}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;

