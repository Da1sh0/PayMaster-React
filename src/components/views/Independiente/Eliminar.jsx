import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Eliminar = () => {
    const { numero_identificacion } = useParams();
    const [usuario, setUsuario] = useState({
        numero_identificacion: numero_identificacion // Inicializamos con el valor obtenido de useParams
    });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch(`http://127.0.0.1:8000/independientes/indeindependienterest/${numero_identificacion}/`, {
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
        <>
            <h1>Eliminar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={usuario.numero_identificacion} // Mostramos el número de identificación del usuario
                    placeholder="ID de Usuario a Eliminar"
                    readOnly // Hacemos el input de solo lectura para no permitir edición
                    required
                />
                <button type="submit">Eliminar Usuario</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
            <button onClick={() => window.location.href = "/ver"}>Volver a Ver Usuarios</button>
        </>
    );
};

export default Eliminar;
