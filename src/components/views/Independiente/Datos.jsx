import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Datos() {
  const [usuario, setUsuario] = useState([]);
  const [form, setForm] = useState({
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
    const cargarUsuarios = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/independientes/indeindependienterest/');
        setUsuario(res.data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    cargarUsuarios();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        imagen: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://127.0.0.1:8000/independientes/indeindependienterest/', form);
      setUsuario([...usuario, res.data]);
      setForm({
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
    } catch (error) {
      console.error('Error al guardar el registro:', error);
    }
  };

  return (
    <div>
      <h1>Datos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Identificación:
          <input type="text" name="numero_identificacion" value={form.numero_identificacion} onChange={handleChange} />
        </label><br />
        <label>
          Primer Nombre:
          <input type="text" name="primer_nombre" value={form.primer_nombre} onChange={handleChange} />
        </label><br />
        <label>
          Segundo Nombre:
          <input type="text" name="segundo_nombre" value={form.segundo_nombre} onChange={handleChange} />
        </label><br />
        <label>
          Primer Apellido:
          <input type="text" name="primer_apellido" value={form.primer_apellido} onChange={handleChange} />
        </label><br />
        <label>
          Segundo Apellido:
          <input type="text" name="segundo_apellido" value={form.segundo_apellido} onChange={handleChange} />
        </label><br />
        <label>
          Estado Civil:
          <select name="estado_civil" value={form.estado_civil} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
        </label><br />
        <label>
          Tipo de Documento:
          <select name="tipo_documento" value={form.tipo_documento} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="cedula">Cédula de Ciudadanía</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="tarjeta">Tarjeta de Identidad</option>
            <option value="otro">Otro</option>
          </select>
        </label><br />
        <label>
          Correo:
          <input type="email" name="correo" value={form.correo} onChange={handleChange} />
        </label><br />
        <label>
          Celular:
          <input type="text" name="celular" value={form.celular} onChange={handleChange} />
        </label><br />
        <label>
          Género:
          <select name="genero" value={form.genero} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </label><br />
        <label>
          Fecha de Nacimiento:
          <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange} />
        </label><br />
        <label>
          Fecha de Expedición del Documento:
          <input type="date" name="fecha_exp_documento" value={form.fecha_exp_documento} onChange={handleChange} />
        </label><br />
        <label>
          Fecha de Ingreso:
          <input type="date" name="fecha_ingreso" value={form.fecha_ingreso} onChange={handleChange} />
        </label><br />
        <label>
          Imagen:
          <input type="file" name="imagen" onChange={handleImageChange} />
        </label><br />
        <button type="submit">Guardar</button>
      </form>

      <ul>
        {usuario.map(item => (
          <li key={item.id}>
            <p>Número de Identificación: {item.numero_identificacion}</p>
            <p>Nombre: {item.primer_nombre} {item.segundo_nombre} {item.primer_apellido} {item.segundo_apellido}</p>
            <p>Estado Civil: {item.estado_civil}</p>
            <p>Tipo de Documento: {item.tipo_documento}</p>
            <p>Correo: {item.correo}</p>
            <p>Celular: {item.celular}</p>
            <p>Género: {item.genero}</p>
            <p>Fecha de Nacimiento: {item.fecha_nacimiento}</p>
            <p>Fecha de Expedición del Documento: {item.fecha_exp_documento}</p>
            <p>Fecha de Ingreso: {item.fecha_ingreso}</p>
            <img src={item.imagen} alt="Imagen" width="200px" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Datos;
