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
    
    const enviarCarrito = async (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        alert ('El carrito está vacío');
        
      } else {
        const token = localStorage.getItem('token');
        try {
          const res = await fetch("http://localhost:5000/api/checkouts", 
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify( {
                "cart": cart,
              }),
            });
          const data = await res.json();
          alert(`PAGO CORRECTO - ${data.message}`);
          setCart([]);
        } catch (e) {
          console.log (e);
        }

      }
    } 

    return (
      <CartContext.Provider value={{cart, setCart, handleAgregar, handleQuitar, calcularTotal, enviarCarrito}}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;

