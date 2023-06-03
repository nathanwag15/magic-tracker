import React, { useState } from "react";

export default function PlayerPicker(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-3/6 ">
      <div className="flex w-full h-full justify-between items-center">
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(1)}
        >
          1
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(2)}
        >
          2
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(3)}
        >
          3
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(4)}
        >
          4
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(5)}
        >
          5
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(6)}
        >
          6
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(7)}
        >
          7
        </button>
        <button
          className="bg-slate-400 text-black px-10 py-5 player-picker-button"
          onClick={() => setCount(8)}
        >
          8
        </button>
      </div>

      <button onClick={() => props.establishCounterCount(count)}>
        Submit Players
      </button>
    </div>
  );
}
