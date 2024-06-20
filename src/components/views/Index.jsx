import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

import logo from '../image/logo2.png';
import contador1 from '../image/contadorInicio.png';
import contador2 from '../image/contadorNosotros.png';
import contador3 from '../image/contadorContacto.png';
import whatsapp from '../image/whatsapp.png';
import gmail from '../image/gmail.png';

function Index() {
  return (
    <div className='body_index'>
      <div className='nav'>
        <a href="#inicio"><img className='logo' src={logo} alt="PayMaster" /></a>
        <div className='encabezados'>
          <a className='link_index' href="#inicio">Inicio</a>
          <a className='link_index' href="#nosotros">Sobre Nosotros</a>
          <a className='link_index' href="#contacto">Contactanos</a>
        </div>
        <Link className='boton_index' to="/menu">Iniciar Sesion</Link>
      </div>
      <div id="inicio" className='contenedor_index'>
        <div className='info_index'>
          <p>Bienvenido a PayMaster</p>
          <p>Nuestro software contable es una herramienta integral diseñada para facilitar la gestión administrativa y financiera de tu empresa. 
            Con funcionalidades avanzadas y una interfaz intuitiva, nuestro software te permite llevar el control total de tus operaciones contables y de recursos humanos.</p>
        </div>
        <div className='imagen'>
          <img src={contador1} alt="contador" />
        </div>
      </div>

      <div id="nosotros" className='contenedor_index'>
        <div className='imagen'>
          <img src={contador2} alt="contador" />
        </div>
        <div className='info_index'>
          <p>Sobre Nosotros</p>
          <p>Este software simplifica la gestión empresarial al centralizar múltiples empresas en una sola plataforma. Ofrece roles específicos como Administradores, Recursos Humanos, Contadores y Empleados, cada uno con acceso a funciones adaptadas. Facilita la incorporación de nuevos empleados con ingreso eficiente de datos. Automatiza el cálculo preciso de la nómina, cumpliendo normativas vigentes y reduciendo el tiempo necesario para procesar pagos.</p>
        </div>
      </div>

      <div id="contacto" className='contenedor_index'>
        <div className='info_index'>
          <p>Contactanos</p>
          <div className='contacto'>
            <img src={whatsapp} alt="Whatsapp" />
            <p>+57 3249401036</p>
          </div>
          <div className='contacto'>
            <img src={gmail} alt="gmail" />
            <p>p4ym4ster@gmail.com</p>
          </div>
        </div>
        <div className='imagen'>
          <img src={contador3} alt="contador" />
        </div>
      </div>
      <div className='pie'>
        <div className='pie1'>
          <p>&copy; 2024 PayMaster. Todos los derechos reservados.</p>
          <p>ADSO 2672364</p>
        </div>
        <div className='pie2'>
          <p>Diiego Camiino</p>
          <p>Vanessa Garcia</p>
          <p>Helmut Ramirez</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
