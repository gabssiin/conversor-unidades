import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Conversor de Unidades</h1>
      <p className="text-lg mb-8 text-center">
        Bem-vindo ao meu conversor de unidades! Utilize os links abaixo para acessar os diferentes conversores.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/conversor-moeda" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Conversor de Moeda (Dólar/Real)
        </Link>
        <Link href="/conversor-temperatura" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
          Conversor de Temperatura (°C/°F)
        </Link>
        <Link href="/conversor-distancia" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
          Conversor de Distância (Metros/Pés/Polegadas)
        </Link>
        <Link href="/sobre" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
          Sobre
        </Link>
      </div>
    </div>
  );
}