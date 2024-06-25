import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const Eliminar = () => {
    const { numero_identificacion } = useParams();
    const [usuario, setUsuario] = useState({
        numero_identificacion: numero_identificacion // Inicializamos con el valor obtenido de useParams
    });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch(`http://127.0.0.1:8000/independientes/inde/independienterest/${numero_identificacion}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({}) // En un método DELETE, el cuerpo debe ser una cadena vacía o un objeto vacío
            });

            if (res.ok) {
                setMessage("Usuario eliminado exitosamente");
                // Redirigir a la página de visualización de usuarios después de eliminar
                window.location.href = "/ver";
            } else {
                const errorMessage = await res.text();
                setMessage(`Error al eliminar usuario: ${errorMessage}`);
            }
        } catch (err) {
            console.error("Error de conexión:", err);
            setMessage("Ha ocurrido un error de conexión");
        }
    };

    return (
        <div className='body_menu'>
            <div className='contenedor_ejustable'>
                <p id='titulo'>Eliminar Usuario</p>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" value={usuario.numero_identificacion} placeholder="ID de Usuario a Eliminar" readOnly required />
                    <button type="submit">Eliminar Usuario</button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>

                <Link className='link' to={`/ver`}>Volver</Link>
            </div>
        </div>
    );
};

export default Eliminar;
