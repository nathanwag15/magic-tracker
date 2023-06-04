"use client";

import Image from "next/image";
import GameComponent from "../../Components/gameComponent";
import React, { useState } from "react";
import PlayerPicker from "@/Components/playerPicker";

export default function Home() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);
  const establishCounterCount = (number) => {
    console.log(count);
    setCount(number);
    setDisplay(1);
  };
  return (
    <div className="game-component-wrapper">
      <div className="game-component">
        {display == 0 && (
          <PlayerPicker establishCounterCount={establishCounterCount} />
        )}
        {display == 1 && <GameComponent countersNumber={count} />}
      </div>
    </div>
  );
}
