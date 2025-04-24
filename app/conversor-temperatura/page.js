"use client";

import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [error, setError] = useState(null);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      setError(null);
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setCelsius(parsedValue.toFixed(2));
      setFahrenheit((parsedValue * 9 / 5 + 32).toFixed(2));
      setError(null);
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setFahrenheit('');
      setCelsius('');
      setError(null);
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFahrenheit(parsedValue.toFixed(2));
      setCelsius(((parsedValue - 32) * 5 / 9).toFixed(2));
      setError(null);
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Conversor de Temperatura (°C/°F)</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <label htmlFor="celsius" className="block text-lg font-medium mb-2">Celsius (°C):</label>
          <input
            type="number"
            id="celsius"
            aria-label="Entrada de temperatura em Celsius"
            value={celsius}
            onChange={handleCelsiusChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="fahrenheit" className="block text-lg font-medium mb-2">Fahrenheit (°F):</label>
          <input
            type="number"
            id="fahrenheit"
            aria-label="Entrada de temperatura em Fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
          />
        </div>
      </div>
    </div>
  );
}