import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [error, setError] = useState(null); // Adiciona estado para mensagens de erro


  const handleCelsiusChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    if (!isNaN(value)) {
      setCelsius(value.toFixed(2));
      setFahrenheit((value * 9 / 5 + 32).toFixed(2));
      setError(null); // Limpa a mensagem de erro se a entrada for válida
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    if (!isNaN(value)) {
      setFahrenheit(value.toFixed(2));
      setCelsius(((value - 32) * 5 / 9).toFixed(2));
      setError(null); // Limpa a mensagem de erro se a entrada for válida
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Conversor de Temperatura (°C/°F)</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Exibe a mensagem de erro */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <label htmlFor="celsius" className="block text-lg font-medium mb-2">Celsius (°C):</label>
          <input
            type="number"
            id="celsius"
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