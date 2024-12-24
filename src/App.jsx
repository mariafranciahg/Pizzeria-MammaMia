
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart  from './pages/Cart';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import CartProvider from './context/CartContext';



function App() {
  

  return (
    <>
    <CartProvider>
      <Navbar />
      
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      
        
      {/* 
        <Register /> 
        <Login /> 
        <Cart />
        <Pizza />  */}
        <Footer />

      </CartProvider>

    </>
  )
}

export default App;
