import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token' || ''));
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [datoUsuario, setDatoUsuario] = useState({});

    const navigate =useNavigate();

    useEffect(() => {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage) {
          setToken(tokenStorage); 
        }
      }, []);
    const getProfile = async () => {
        const tokenStorage = localStorage.getItem('token');

        const res = await fetch ('http://localhost:5000/api/auth/me', 
            {
                headers: {
                    "Authorization": `Bearer ${tokenStorage}`
                }
            }
        );
        const data = await res.json();
        if (data.email) {
            setDatoUsuario(data);
        } 
    };
       
      useEffect(() => {
            getProfile(); 
        
    }, [token]);

    const login = async (e) => {
        e.preventDefault();
        
        try {
           const res = await fetch('http://localhost:5000/api/auth/login',
            {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                "email": email,
                "password": pass
              })
            }
           );
           const data = await res.json();
    
           
           if (data.token) {
            setToken(data.token);
            localStorage.setItem('token',data.token);
            setEmail(data.email);  
            localStorage.setItem('email', data.email);
            navigate ('/profile');
            
            getProfile();

           } else {
            alert (data.error)
           }
    
        } catch (e) {
          console.log (e);
        }
      };

      const register = async (e) => {
        e.preventDefault();
        
        try {
           const res = await fetch('http://localhost:5000/api/auth/register',
            {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                "email": email,
                "password": pass
              })
            }
           );
           const data = await res.json();
           
           if (data.token) {
            alert ("Usuario registrado con exito");
            navigate ('/login');
           } else {
            alert (data.error)
           }
           
        } catch (e) {
          console.log (e);
        }
      }


    const logout = () => {
        
        setToken('');
        setEmail('');
        setDatoUsuario('');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    
    };



    return (
        <UserContext.Provider value={{ token, logout, login, email, pass, setEmail, setPass, register, datoUsuario}}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;