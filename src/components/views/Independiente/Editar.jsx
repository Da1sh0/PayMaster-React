import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Editar() {
  const { numero_identificacion } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    numero_identificacion: '',
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    estado_civil: '',
    tipo_documento: '',
    correo: '',
    celular: '',
    genero: '',
    fecha_nacimiento: '',
    fecha_exp_documento: '',
    fecha_ingreso: '',
    imagen: ''
  });

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/independientes/indeindependienterest/${numero_identificacion}/`);
        setUsuario(res.data);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    };
    cargarUsuario();
  }, [numero_identificacion]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/independientes/indeindependienterest/${numero_identificacion}/`, usuario);
      navigate('/ver');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de Identificación:</label>
          <input type="text" name="numero_identificacion" value={usuario.numero_identificacion} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Primer Nombre:</label>
          <input type="text" name="primer_nombre" value={usuario.primer_nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Segundo Nombre:</label>
          <input type="text" name="segundo_nombre" value={usuario.segundo_nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Primer Apellido:</label>
          <input type="text" name="primer_apellido" value={usuario.primer_apellido} onChange={handleChange} />
        </div>
        <div>
          <label>Segundo Apellido:</label>
          <input type="text" name="segundo_apellido" value={usuario.segundo_apellido} onChange={handleChange} />
        </div>
        <div>
          <label>Estado Civil:</label>
          <input type="text" name="estado_civil" value={usuario.estado_civil} onChange={handleChange} />
        </div>
        <div>
          <label>Tipo de Documento:</label>
          <input type="text" name="tipo_documento" value={usuario.tipo_documento} onChange={handleChange} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="correo" value={usuario.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" name="celular" value={usuario.celular} onChange={handleChange} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" name="genero" value={usuario.genero} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="date" name="fecha_nacimiento" value={usuario.fecha_nacimiento} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Expedición del Documento:</label>
          <input type="date" name="fecha_exp_documento" value={usuario.fecha_exp_documento} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Ingreso:</label>
          <input type="date" name="fecha_ingreso" value={usuario.fecha_ingreso} onChange={handleChange} />
        </div>
        <div>
          <label>Imagen URL:</label>
          <input type="text" name="imagen" value={usuario.imagen} onChange={handleChange} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Editar;
