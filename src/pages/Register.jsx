import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Register = () => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'pass') setPass(value);

  };

  const { register, email, pass, setEmail, setPass } = useContext(UserContext);
  

  return (
    
    <div className='pageContainer form' >

      <div className='pageContent'>
          <h3>Registro de usuario:</h3>
      
          <form onSubmit={register} className='formContent'>
              <div className="mb-3">
                  <label  className="form-label">Email </label>
                  <input name="email" type="email" value={email} className="form-control"  onChange={handleChange}/>
              </div>
              <div className="mb-3">
                  <label  className="form-label">Contraseña</label>
                  <input name="pass" type="password" value={pass} className="form-control" onChange={handleChange} />
              </div>

          
              
              <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
    </div>

  )
}

export default Register
