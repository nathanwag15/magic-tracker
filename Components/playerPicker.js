import React, { useState } from "react";

export default function PlayerPicker(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="player-picker-wrapper flex flex-col w-full h-3/6 ">
      <div className="player-picker flex w-full h-full justify-between items-center">
        <button
          className="player-picker-button"
          onClick={() => setCount(1)}
        >
          1
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(2)}
        >
          2
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(3)}
        >
          3
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(4)}
        >
          4
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(5)}
        >
          5
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(6)}
        >
          6
        </button>
        <button
          className="player-picker-button"
          onClick={() => setCount(7)}
        >
          7
        </button>
        <button
          className="player-picker-button"
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
