import React from 'react';

import logo from '../../image/logo2.png';


function Login() {
  return (
    <div className='body_inde'>
      <div className="contenedor_inde">
        <div className="logo_login">
          <img src={logo} alt="PayMaster" />
          <p className='titulo_inde'>PayMaster</p>
        </div>

        <div className="volverB">
          <a className="link volver" href="/menu">Volver</a> 
        </div>

        <div className="login">
          <p id="titulo">Iniciar sesión</p>
          <form className="formulario">
            <label htmlFor="id_numero_identificacion">Número de identificación:</label>
            <input type="number" id="id_numero_identificacion" name="numero_identificacion" required />

            <label htmlFor="id_contrasena">Contraseña:</label>
            <input type="password" id="id_contrasena" name="contrasena" required />

            <div className="button">
              <button className="boton_inde" type="submit">Iniciar sesión</button>
            </div>
          </form>

          <a className="link" href="/registrarIndependiente">Registrarse</a> 
          <a className="link" href="/recuperar_contrasena">Recuperar contraseña</a> 
        </div>
      </div>
    </div>
  );
}

export default Login;
