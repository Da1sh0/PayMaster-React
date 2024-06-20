import React, { useState } from 'react';

const Eliminar = () => {
    const [idUsuario, setIdUsuario] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch(`http://127.0.0.1:8000/independientes/indeindependienterest/${idUsuario}/`, {
                method: "DELETE",
            });

            if (res.ok) {
                setMessage("Usuario eliminado exitosamente");
                setIdUsuario(""); 
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
                    value={idUsuario}
                    placeholder="ID de Usuario a Eliminar"
                    onChange={(e) => setIdUsuario(e.target.value)}
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
