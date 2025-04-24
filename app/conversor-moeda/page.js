import { useState } from 'react';

export default function ConversorMoeda() {
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');
  const cotacaoDolar = 5.25; // Cotação FIXA - substitua por uma API real

  const handleRealChange = (e) => {
    const value = parseFloat(e.target.value.replace(",", ".")) || 0; //Tratamento para vírgula
    setReal(value.toFixed(2)); //Limita a duas casas decimais
    setDolar((value / cotacaoDolar).toFixed(2));
  };

  const handleDolarChange = (e) => {
    const value = parseFloat(e.target.value.replace(",", ".")) || 0; //Tratamento para vírgula
    setDolar(value.toFixed(2)); //Limita a duas casas decimais
    setReal((value * cotacaoDolar).toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Conversor de Moeda (Dólar/Real)</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <label htmlFor="real" className="block text-lg font-medium mb-2">Reais (BRL):</label>
          <input type="number" id="real" value={real} onChange={handleRealChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" step="0.01"/>
        </div>
        <div>
          <label htmlFor="dolar" className="block text-lg font-medium mb-2">Dólares (USD):</label>
          <input type="number" id="dolar" value={dolar} onChange={handleDolarChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" step="0.01"/>
        </div>
      </div>
    </div>
  );
}