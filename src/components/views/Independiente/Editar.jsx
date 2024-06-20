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

        <label>Número de Identificación:</label>
        <input type="text" name="numero_identificacion" value={usuario.numero_identificacion} onChange={handleChange}/>

        <label>Nombre Completo:</label>
        <input type="text" name="primer_nombre" value={usuario.primer_nombre} onChange={handleChange} />
        <input type="text" name="segundo_nombre" value={usuario.segundo_nombre} onChange={handleChange} />
        <input type="text" name="primer_apellido" value={usuario.primer_apellido} onChange={handleChange} />
        <input type="text" name="segundo_apellido" value={usuario.segundo_apellido} onChange={handleChange} />

        <label>Estado Civil:</label>
        <select value={usuario.estado_civil} onChange={handleChange} required >
          <option value="">Seleccione Estado Civil</option>
          <option value="SOLTERO">Soltero/a</option>
          <option value="CASADO">Casado/a</option>
          <option value="DIVORCIADO">Divorciado/a</option>
          <option value="VIUDO">Viudo/a</option>
        </select>

        <label>Tipo de Documento:</label>
        <select value={usuario.tipo_documento} onChange={handleChange} required >
          <option value="">Seleccione Tipo de Documento</option>
          <option value="Cc">Cédula de ciudadanía</option>
          <option value="Ce">Cédula de extranjería</option>
          <option value="Passport">Pasaporte</option>
        </select>

        <label>Correo:</label>
        <input type="email" name="correo" value={usuario.correo} onChange={handleChange} />

        <label>Celular:</label>
        <input type="text" name="celular" value={usuario.celular} onChange={handleChange} />

        <label>Género:</label>
        <select value={usuario.genero} onChange={handleChange} required>
          <option value="">Seleccione Género</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
          <option value="O">Otro</option>
          <option value="P">Prefiero no decir</option>
        </select>

        <label>Fecha de Nacimiento:</label>
        <input type="date" name="fecha_nacimiento" value={usuario.fecha_nacimiento} onChange={handleChange} />

        <label>Fecha de Expedición del Documento:</label>
        <input type="date" name="fecha_exp_documento" value={usuario.fecha_exp_documento} onChange={handleChange} />

        <label>Fecha de Ingreso:</label>
        <input type="date" name="fecha_ingreso" value={usuario.fecha_ingreso} onChange={handleChange} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Editar;
