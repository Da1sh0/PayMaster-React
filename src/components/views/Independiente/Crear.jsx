import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css';

const Crear = () => {
    const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
    const [primerNombre, setPrimerNombre] = useState("");
    const [segundoNombre, setSegundoNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [salarioBase, setSalarioBase] = useState("");
    const [genero, setGenero] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [fechaExpDocumento, setFechaExpDocumento] = useState("");
    const [fechaIngreso, setFechaIngreso] = useState("");
    const [imagen, setImagen] = useState(null);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("numero_identificacion", numeroIdentificacion);
        formData.append("primer_nombre", primerNombre);
        formData.append("segundo_nombre", segundoNombre);
        formData.append("primer_apellido", primerApellido);
        formData.append("segundo_apellido", segundoApellido);
        formData.append("estado_civil", estadoCivil);
        formData.append("tipo_documento", tipoDocumento);
        formData.append("correo", correo);
        formData.append("celular", celular);
        formData.append("salairo_base", salarioBase);
        formData.append("genero", genero);
        formData.append("fecha_nacimiento", fechaNacimiento);
        formData.append("fecha_exp_documento", fechaExpDocumento);
        formData.append("fecha_ingreso", fechaIngreso);
        formData.append("imagen", imagen);

        try {
            let res = await fetch("http://127.0.0.1:8000/independientes/inde/independienterest/", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setNumeroIdentificacion("");
                setPrimerNombre("");
                setSegundoNombre("");
                setPrimerApellido("");
                setSegundoApellido("");
                setEstadoCivil("");
                setTipoDocumento("");
                setCorreo("");
                setCelular("");
                setSalarioBase("");
                setGenero("");
                setFechaNacimiento("");
                setFechaExpDocumento("");
                setFechaIngreso("");
                setImagen(null);
                setMessage("Usuario creado exitosamente");
            } else {
                const errorMessage = await res.text();
                setMessage(`Error: ${errorMessage}`);
            }
        } catch (err) {
            console.error("Error de conexión:", err);
            setMessage("Ha ocurrido un error de conexión");
        }
    };

    const handleFileChange = (e) => {
        setImagen(e.target.files[0]);
    };

    return (
        <div className='body_menu'>
            <div className='contenedor_formulario'>
                <p id='titulo'>Formulario de Registro de Usuarios</p>
                <form className='form' onSubmit={handleSubmit}>

                    <label>Numero de documento </label>
                    <input type="text" value={numeroIdentificacion} placeholder="123456789" onChange={(e) => setNumeroIdentificacion(e.target.value)} required/>
                    
                    <label> Nombre Completo </label>
                    <input type="text"value={primerNombre}placeholder="Primer Nombre"onChange={(e) => setPrimerNombre(e.target.value)} required />
                    <input type="text" value={segundoNombre} placeholder="Segundo Nombre" onChange={(e) => setSegundoNombre(e.target.value)} />
                    <input type="text"  value={primerApellido} placeholder="Primer Apellido" onChange={(e) => setPrimerApellido(e.target.value)} required />
                    <input type="text" value={segundoApellido} placeholder="Segundo Apellido" onChange={(e) => setSegundoApellido(e.target.value)} />
                    
                    <label> Estado Civil </label>
                    <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} required >
                        <option value="">Seleccione Estado Civil</option>
                        <option value="SOLTERO">Soltero/a</option>
                        <option value="CASADO">Casado/a</option>
                        <option value="DIVORCIADO">Divorciado/a</option>
                        <option value="VIUDO">Viudo/a</option>
                    </select>

                    <label> Tipo de Documento </label>
                    <select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} required>
                        <option value="">Seleccione Tipo de Documento</option>
                        <option value="Cc">Cédula de ciudadanía</option>
                        <option value="Ce">Cédula de extranjería</option>
                        <option value="Passport">Pasaporte</option>
                    </select>

                    <label> Correo Electronico </label>
                    <input type="email" value={correo} placeholder="ejemplo@ejemplo.com" onChange={(e) => setCorreo(e.target.value)} required />
                    
                    <label> celular </label>
                    <input type="number" value={celular} placeholder="3123456789" onChange={(e) => setCelular(e.target.value)} required />
                    
                    <label> Salario Base </label>
                    <input type="number" value={salarioBase} placeholder="1300000" onChange={(e) => setSalarioBase(e.target.value)} required />
                    
                    <label> Gnero </label>
                    <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                        <option value="">Seleccione Género</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                        <option value="P">Prefiero no decir</option>
                    </select>

                    <label> Fecha de Nacimiento </label>
                    <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />

                    <label> Fecha de Expedicion del Documento </label>
                    <input type="date" value={fechaExpDocumento} onChange={(e) => setFechaExpDocumento(e.target.value)} required />
                    
                    <label> Fecha de Ingreso </label>
                    <input type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />

                    <label> Foto de Perfil </label>
                    <input type="file"onChange={handleFileChange}/>

                    <button type="submit">Crear Usuario</button>
                    
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
                <Link className='link' to={`/ver`}>Volver</Link>
            </div>

        </div>
    );
};

export default Crear;
