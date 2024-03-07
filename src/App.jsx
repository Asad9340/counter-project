import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="text-center p-4 bg-blue-950 text-white text-3xl font-bold">
        <h1>Counter apps</h1>
      </div>
      <div className="text-6xl font-extrabold text-center mt-24 ">
        <h1>{value}</h1>
      </div>
      <div className="flex gap-6 justify-center mt-16">
        <button
          onClick={() => setValue(value + 1)}
          className="text-2xl px-4 py-2 border border-blue-900 rounded-xl outline-none hover:bg-blue-900 duration-300 hover:text-white active:bg-blue-950"
        >
          Increment
        </button>
        <button
          onClick={() => (value <= 0 ? alert("You can't add negative value") : setValue(value - 1))}
          className="text-2xl px-4 py-2 border border-blue-900 rounded-xl outline-none hover:bg-red-900 duration-300 hover:text-white active:bg-red-950"
        >
          Decrement
        </button>
        <button
          onClick={()=>setValue(0)}
          className="text-2xl px-4 py-2 border border-blue-900 rounded-xl outline-none hover:bg-green-900 duration-300 hover:text-white active:bg-green-950"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
