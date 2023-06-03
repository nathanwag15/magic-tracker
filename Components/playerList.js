import Image from "next/image";
import LifeCounter from "./lifecounter";
import React, { useState } from "react";

export default function PlayerList(props) {
  return (
    <ul>
      {props.players.map((player) => (
        <li key={player.id} onClick={() => props.onItemClick(player)}>
          {player.name}
        </li>
      ))}
    </ul>
  );
}
