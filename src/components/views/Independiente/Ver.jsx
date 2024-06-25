import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/index.css';

function Ver() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/independientes/inde/independienterest/');
        setUsuario(res.data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };
    cargarUsuarios();
  }, []);

  return (
    <div className='body_menu'>
      <div className='contenedor_tablas'>
        <h1 id='titulo'>Independientes registrados </h1>
        <table>
          <thead>
            <tr>
              <th>Número de Identificación</th>
              <th>Nombre</th>
              <th>Estado Civil</th>
              <th>Tipo de Documento</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Salario</th>
              <th>Género</th>
              <th>Fecha de Nacimiento</th>
              <th>Fecha de Expedición del Documento</th>
              <th>Fecha de Ingreso</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuario.map(item => (
              <tr key={item.numero_identificacion}>
                <td>{item.numero_identificacion}</td>
                <td>{item.primer_nombre} {item.segundo_nombre} {item.primer_apellido} {item.segundo_apellido}</td>
                <td>{item.estado_civil}</td>
                <td>{item.tipo_documento}</td>
                <td>{item.correo}</td>
                <td>{item.celular}</td>
                <td>{item.salairo_base}</td>
                <td>{item.genero}</td>
                <td>{item.fecha_nacimiento}</td>
                <td>{item.fecha_exp_documento}</td>
                <td>{item.fecha_ingreso}</td>
                <td><img src={item.imagen} alt={item.primer_nombre} width="100px" /></td>
                <td>
                  <Link className='link_table' to={`/editar/${item.numero_identificacion}`}>Editar</Link>
                   | 
                  <Link className='link_table' to={`/eliminar/${item.numero_identificacion}`}>Eliminar</Link>
                   | 
                  <Link className='link_table' to={`/calcular/${item.numero_identificacion}`}>Calcular</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className='link' to={`/crear`}>Crear</Link>
      </div>
    </div>
  );
}

export default Ver;
