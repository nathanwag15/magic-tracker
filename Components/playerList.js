import Image from "next/image";
import LifeCounter from "./lifecounter";
import React, { useState } from "react";

export default function PlayerList(props) {
  return (
    <div>
      <div className="prompt-wrapper">Please select {props.count} players</div>

      <ul>
        {props.players.map((player) => (
          <li key={player.id} onClick={() => props.onItemClick(player)}>
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
