import { useState } from 'react';

export default function ConversorDistancia() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const handleMetrosChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setMetros(value.toFixed(2));
    setPes((value * 3.28084).toFixed(2));
    setPolegadas((value * 39.3701).toFixed(2));
  };

  const handlePesChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setPes(value.toFixed(2));
    setMetros((value / 3.28084).toFixed(2));
    setPolegadas((value * 12).toFixed(2));
  };

  const handlePolegadasChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setPolegadas(value.toFixed(2));
    setMetros((value / 39.3701).toFixed(2));
    setPes((value / 12).toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Conversor de Distância</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <label htmlFor="metros" className="block text-lg font-medium mb-2">Metros:</label>
          <input type="number" id="metros" value={metros} onChange={handleMetrosChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" step="0.01"/>
        </div>
        <div>
          <label htmlFor="pes" className="block text-lg font-medium mb-2">Pés:</label>
          <input type="number" id="pes" value={pes} onChange={handlePesChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" step="0.01"/>
        </div>
        <div>
          <label htmlFor="polegadas" className="block text-lg font-medium mb-2">Polegadas:</label>
          <input type="number" id="polegadas" value={polegadas} onChange={handlePolegadasChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" step="0.01"/>
        </div>
      </div>
    </div>
  );
}