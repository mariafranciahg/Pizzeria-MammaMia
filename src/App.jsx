
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';

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
import { useContext } from 'react';
import { UserContext } from './context/UserContext';



function App() {
  const { token } = useContext(UserContext);


  return (
    <>
    <CartProvider>
      
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={token ? <Navigate to="/"/> : <Register/>}
           />
          <Route path='/login' element={token ? <Navigate to="/profile"/> : <Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/profile' element={ token ? <Profile/> : <Navigate to="/login" />} 
          />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      
        <Footer />
    
    </CartProvider>

    </>
  )
}

export default App;
