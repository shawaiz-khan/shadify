import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState({
    colorA: randomColor(),
    colorB: randomColor(),
    colorC: randomColor(),
  });

  const handleGenerateColors = () => {
    setColors({
      colorA: randomColor(),
      colorB: randomColor(),
      colorC: randomColor(),
    });
  };

  return (
    <main className="w-80 h-auto bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold text-gray-800">Shadify</h1>
      <div className="flex w-full gap-2">
        <div className='flex-1 rounded-lg shadow-md transition-all'>
          <div className="h-20" style={{ backgroundColor: colors.colorA }}></div>
          <p className="text-center text-sm font-medium text-gray-800 py-3">{colors.colorA}</p>
        </div>
        <div className='flex-1 rounded-lg shadow-md transition-all'>
          <div className="h-20" style={{ backgroundColor: colors.colorB }}></div>
          <p className="text-center text-sm font-medium text-gray-800 py-3">{colors.colorB}</p>
        </div>
        <div className='flex-1 rounded-lg shadow-md transition-all'>
          <div className="h-20" style={{ backgroundColor: colors.colorC }}></div>
          <p className="text-center text-sm font-medium text-gray-800 py-3">{colors.colorC}</p>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all"
        onClick={handleGenerateColors}
      >
        Generate Colors
      </button>
    </main>
  );
}

export default App;