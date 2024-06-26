import React, { useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CalcularAportes() {
    const { numero_identificacion } = useParams(); // Obtener el parámetro de la URL
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);

    const calcularAportes = () => {
        axios.get(`http://127.0.0.1:8000/independientes/calcu/calcularinde/${numero_identificacion}/`)
            .then(response => {
                console.log("Datos recibidos:", response.data); // Debug: Mostrar los datos recibidos en la consola
                setDatos(response.data);
                setError(null);
            })
            .catch(error => {
                console.error("Error al calcular aportes:", error);
                setError("Error al calcular aportes");
            });
    };

    return (
        <div className='body_menu'>
            <div className='contenedor_ejustable'>
                <button className='botoon' onClick={calcularAportes}>Calcular Aportes</button>
                {error && <p>{error}</p>}
                {datos && (
                    <div className='calculos'>
                        <p>Salario Base: {datos.salarioBase}</p>
                        <p>IBC: {datos.ibc}</p>
                        <p>Salud: {datos.salud}</p>
                        <p>Pensión: {datos.pension}</p>
                        <p>ARL: {datos.arl}</p>
                        <p>CCF: {datos.cajaCompensacion}</p>
                    </div>
                )}
                <Link className='link' to={`/ver`}>Volver</Link>
            </div>
        </div>
    );
}

export default CalcularAportes;
