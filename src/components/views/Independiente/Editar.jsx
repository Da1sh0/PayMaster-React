import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    salairo_base: '',
    genero: '',
    fecha_nacimiento: '',
    fecha_exp_documento: '',
    fecha_ingreso: '',
  });

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/independientes/inde/independienterest/${numero_identificacion}/`);
        if (!res.ok) {
          throw new Error('Error al cargar el usuario');
        }
        const data = await res.json();
        setUsuario(data);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    };
    cargarUsuario();
  }, [numero_identificacion]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/independientes/inde/independienterest/${numero_identificacion}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error al actualizar el usuario:', errorData);
        throw new Error('Error al actualizar el usuario');
      }

      navigate('/ver');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div className='body_menu'>
      <div className='contenedor_formulario'>
        <p id='titulo'>Editar Usuario</p>
        <form className='form' onSubmit={handleSubmit}>
          <label>Número de Identificación:</label>
          <input type="text" name="numero_identificacion" value={usuario.numero_identificacion} readOnly />

          <label>Nombre Completo:</label>
          <input type="text" name="primer_nombre" value={usuario.primer_nombre} onChange={handleChange} />
          <input type="text" name="segundo_nombre" value={usuario.segundo_nombre} onChange={handleChange} />
          <input type="text" name="primer_apellido" value={usuario.primer_apellido} onChange={handleChange} />
          <input type="text" name="segundo_apellido" value={usuario.segundo_apellido} onChange={handleChange} />

          <label>Estado Civil:</label>
          <select name="estado_civil" value={usuario.estado_civil} onChange={handleChange} required>
            <option value="">Seleccione Estado Civil</option>
            <option value="SOLTERO">Soltero/a</option>
            <option value="CASADO">Casado/a</option>
            <option value="DIVORCIADO">Divorciado/a</option>
            <option value="VIUDO">Viudo/a</option>
          </select>

          <label>Tipo de Documento:</label>
          <select name="tipo_documento" value={usuario.tipo_documento} onChange={handleChange} required>
            <option value="">Seleccione Tipo de Documento</option>
            <option value="Cc">Cédula de ciudadanía</option>
            <option value="Ce">Cédula de extranjería</option>
            <option value="Passport">Pasaporte</option>
          </select>

          <label>Correo:</label>
          <input type="email" name="correo" value={usuario.correo} onChange={handleChange} />

          <label>Celular:</label>
          <input type="number" name="celular" value={usuario.celular} onChange={handleChange} />

          <label> Salario Base </label>
          <input type="number" name="salairo_base" value={usuario.salairo_base} onChange={handleChange} required />

          <label>Género:</label>
          <select name="genero" value={usuario.genero} onChange={handleChange} required>
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
        <Link className='link' to={`/ver`}>Volver</Link>

      </div>
    </div>
  );
}

export default Editar;
