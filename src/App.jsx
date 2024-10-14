import { ArrowUpRightFromSquare } from 'lucide-react';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const localColorA = localStorage.getItem("ColorA");
  const localColorB = localStorage.getItem("ColorB");
  const localColorC = localStorage.getItem("ColorC");

  const [colors, setColors] = useState({
    colorA: localColorA === null || localColorA === undefined ? randomColor() : localColorA,
    colorB: localColorB === null || localColorB === undefined ? randomColor() : localColorB,
    colorC: localColorC === null || localColorA === undefined ? randomColor() : localColorC,
  });

  localStorage.setItem("ColorA", colors.colorA)
  localStorage.setItem("ColorB", colors.colorB)
  localStorage.setItem("ColorC", colors.colorC)

  const handleGenerateColors = () => {
    setColors({
      colorA: randomColor(),
      colorB: randomColor(),
      colorC: randomColor(),
    });
  };

  const handleFollow = () => {
    window.open("https://www.instagram.com/shawaizkhan.dev/", "_blank");
  };

  return (
    <main className="w-80 h-auto bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-4">
      <div className='flex justify-start w-full items-center gap-3'>
        <h1 className="text-xl font-bold text-gray-800">Shadify</h1>
        <ArrowUpRightFromSquare
          className='text-blue-500 cursor-pointer'
          onClick={handleFollow}
          size={23}
        />
      </div>
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