
import './App.css'


import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Register from './components/Register';
// import Login from './components/Login';
import Cart  from './components/Cart';



function App() {
  

  return (
    <>
      <Navbar />
     <Home /> 
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </>
  )
}

export default App
