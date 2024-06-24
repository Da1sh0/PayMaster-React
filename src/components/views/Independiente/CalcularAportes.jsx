import React, { useState } from 'react';
import axios from 'axios';

function CalcularAportes({ numeroIdentificacion }) {
    const [datos, setDatos] = useState(null);

    const calcularAportes = () => {
        axios.post(`/calcularinde/${numeroIdentificacion}/`, {
            // Puedes enviar datos adicionales aquí si es necesario
        })
        .then(response => {
            setDatos(response.data);
        })
        .catch(error => {
            console.error("Error al calcular aportes", error);
        });
    };

    return (
        <div>
            <button onClick={calcularAportes}>Calcular Aportes</button>
            {datos && (
                <div>
                    <p>Salario Base: {datos.salario_base}</p>
                    <p>IBC: {datos.ibc}</p>
                    <p>Salud: {datos.salud}</p>
                    <p>Pensión: {datos.pension}</p>
                    <p>ARL: {datos.arl}</p>
                    <p>CCF: {datos.ccf}</p>
                </div>
            )}
        </div>
    );
}

export default CalcularAportes;
