import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Login = () => {
   
    const { login, email, pass, setEmail, setPass } = useContext(UserContext);

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') setEmail(value);
      if (name === 'pass') setPass(value);
    };
  

  return (
    <div className='pageContainer form' >

        <div className='pageContent'>
          <h3>Login:</h3>
      
          <form onSubmit={login} className='formContent'>
              <div className="mb-3">
                  <label  className="form-label">Email </label>
                  <input name="email" type="email" value={email} className="form-control"  onChange={handleChange}/>
              </div>
              <div className="mb-3">
                  <label  className="form-label">Contraseña</label>
                  <input name="pass" type="password" value={pass} className="form-control" onChange={(handleChange)} />
              </div>
              
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>

    </div>

  )
}

export default Login
