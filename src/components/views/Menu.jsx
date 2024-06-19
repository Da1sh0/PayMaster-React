import React from 'react';
import { Link } from 'react-router-dom'; 

import logo from '../image/logo2.png';

function Menu() {
  return (
    <div className='body_menu'>
      <div className='contenedor_menu'>
        <div className='titulo'>
          <img src={logo} alt="PayMaster" />
          <p>Bienvenido a PayMaster, seleccione una opción</p>
          <img src={logo} alt="PayMaster" />
        </div>

        <div className='menu'>
          <Link className='opcion' to="/indepentiente/login">
            <div className="opcion-background">
              <p className='boton'>Independiente</p>
              <p className='descripcion'>Trabajas por tu cuenta.</p>
            </div>
          </Link>

          <Link className='opcion' to="/indepentiente/login">
            <div className="opcion-background">
              <p className='boton'>Dependiente</p>
              <p className='descripcion'>Trabajas para una empresa.</p>
            </div>
          </Link>
        </div>

        <Link className='link' to="/">Volver</Link>
      </div>
    </div>
  );
}

export default Menu;
