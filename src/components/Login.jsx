import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorVacio, setErrorVacio] = useState(false);
    const [errorPass, setErrorPass] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'pass') setPass(value);
  };

  const validarCampos = (e) => {
    e.preventDefault();
 
    setErrorVacio(false);
    setErrorPass(false);

    if (email === '' || pass === '') {
      setErrorVacio(true);
      return;
    }

    if (pass.length < 6) {
        setErrorPass(true);
        return;
    }
    
    alert('Acceso correcto');
    setEmail('');
    setPass('');
    setConfirPass('');
  };

  return (
    <div className='form-container' >

        <h3>Login:</h3>
    
        <form onSubmit={validarCampos} className='form'>
            <div className="mb-3">
                <label  className="form-label">Email </label>
                <input name="email" type="email" value={email} className="form-control"  onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Contraseña</label>
                <input name="pass" type="password" value={pass} className="form-control" onChange={handleChange} />
            </div>


            {errorVacio ? <p className='error'> Debes completar todos los campos</p> : null}
            {errorPass? <p className='error'> La contraseña debe tener un mínimo de 6 caracteres</p> : null}
            
            <button type="submit" className="btn btn-primary">Login</button>
        </form>

    </div>

  )
}

export default Login
