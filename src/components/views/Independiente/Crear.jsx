import React, { useState } from 'react';

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
        formData.append("genero", genero);
        formData.append("fecha_nacimiento", fechaNacimiento);
        formData.append("fecha_exp_documento", fechaExpDocumento);
        formData.append("fecha_ingreso", fechaIngreso);
        formData.append("imagen", imagen);

        try {
            let res = await fetch("http://localhost:8000/usuarios/rest/usuariosrest/", {
                method: "POST",
                body: formData,
            });
            const resJson = await res.json();
            if (res.status === 200) {
                setNumeroIdentificacion("");
                setPrimerNombre("");
                setSegundoNombre("");
                setPrimerApellido("");
                setSegundoApellido("");
                setEstadoCivil("");
                setTipoDocumento("");
                setCorreo("");
                setCelular("");
                setGenero("");
                setFechaNacimiento("");
                setFechaExpDocumento("");
                setFechaIngreso("");
                setImagen(null);
                setMessage("Usuario creado exitosamente");
            } else {
                setMessage("Ha ocurrido un error");
            }
        } catch (err) {
            console.log(err);
            setMessage("Ha ocurrido un error");
        }
    };

    const handleFileChange = (e) => {
        setImagen(e.target.files[0]);
    };

    return (
        <>
            <h1>Formulario de Registro de Usuarios</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={numeroIdentificacion}
                    placeholder="Número de Identificación"
                    onChange={(e) => setNumeroIdentificacion(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={primerNombre}
                    placeholder="Primer Nombre"
                    onChange={(e) => setPrimerNombre(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={segundoNombre}
                    placeholder="Segundo Nombre"
                    onChange={(e) => setSegundoNombre(e.target.value)}
                />
                <input
                    type="text"
                    value={primerApellido}
                    placeholder="Primer Apellido"
                    onChange={(e) => setPrimerApellido(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={segundoApellido}
                    placeholder="Segundo Apellido"
                    onChange={(e) => setSegundoApellido(e.target.value)}
                />
                <input
                    type="text"
                    value={estadoCivil}
                    placeholder="Estado Civil"
                    onChange={(e) => setEstadoCivil(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={tipoDocumento}
                    placeholder="Tipo de Documento"
                    onChange={(e) => setTipoDocumento(e.target.value)}
                    required
                />
                <input
                    type="email"
                    value={correo}
                    placeholder="Correo Electrónico"
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={celular}
                    placeholder="Número de Celular"
                    onChange={(e) => setCelular(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={genero}
                    placeholder="Género"
                    onChange={(e) => setGenero(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={fechaNacimiento}
                    placeholder="Fecha de Nacimiento"
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={fechaExpDocumento}
                    placeholder="Fecha de Expedición del Documento"
                    onChange={(e) => setFechaExpDocumento(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={fechaIngreso}
                    placeholder="Fecha de Ingreso"
                    onChange={(e) => setFechaIngreso(e.target.value)}
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Crear Usuario</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </>
    );
};

export default Crear;
