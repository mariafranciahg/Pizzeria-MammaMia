import React from 'react'
import {useState} from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirPass, setConfirPass] = useState('');
    const [errorVacio, setErrorVacio] = useState(false);
    const [errorConfir, setErrorConfir] = useState(false);
    const [errorPass, setErrorPass] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'pass') setPass(value);
    if (name === 'confirPass') setConfirPass(value);
  };


  
  const validarCampos = (e) => {
    e.preventDefault();
 
    setErrorVacio(false);
    setErrorConfir(false);
    setErrorPass(false);

    if (email === '' || pass === '' || confirPass === '') {
      setErrorVacio(true);
      return;
    }

    if (pass !== confirPass) {
      setErrorConfir(true);
      return;
    }

    if (pass.length < 6) {
        setErrorPass(true);
        return;
    }
    
    alert('Registro correcto');
    setEmail('');
    setPass('');
    setConfirPass('');

  };

  return (
    
    <div className='pageContainer form' >

      <div className='pageContent'>
          <h3>Registro de usuario:</h3>
      
          <form onSubmit={validarCampos} className='formContent'>
              <div className="mb-3">
                  <label  className="form-label">Email </label>
                  <input name="email" type="email" value={email} className="form-control"  onChange={handleChange}/>
              </div>
              <div className="mb-3">
                  <label  className="form-label">Contraseña</label>
                  <input name="pass" type="password" value={pass} className="form-control" onChange={handleChange} />
              </div>

              <div className="mb-3">
                  <label className="form-label">Confirma Contraseña</label>
                  <input name="confirPass" type="password" value={confirPass} className="form-control" onChange={handleChange}  />
              </div>

              {errorVacio ? <p className='error'> Debes completar todos los campos</p> : null}
              {errorConfir ? <p className='error'> Las contraseñas deben ser iguales</p> : null}
              {errorPass? <p className='error'> La contraseña debe tener un mínimo de 6 caracteres</p> : null}
              
              <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
    </div>

  )
}

export default Register
