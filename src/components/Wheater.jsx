import React from 'react';

const Wheater = ({ result }) => {
    const { name } = result;

    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es</h2>
                <p className="temperatura">
                    {parseFloat(result.main.temp - 273.15, 10).toFixed(2)}°C
                </p>
                <p>Temperatura Máxima: 
                    {parseFloat(result.main.temp_max - 273.15, 10).toFixed(2)}°C
                </p>
                <p>Temperatura Minima:
                    {parseFloat(result.main.temp_min - 273.15, 10).toFixed(2)}°C
                </p>
            </div>
        </div>
    );
}

export default Wheater;