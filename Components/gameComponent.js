import Image from "next/image";
import LifeCounter from "./lifecounter";
import PlayerList from "./playerList";
import React, { useState } from "react";

export default function GameComponent(props) {
  const [playersChosen, setPlayersChosen] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayers, setCurrentPlayers] = useState([
    { name: "Steve", id: 1 },
    { name: "Alex", id: 2 },
    { name: "Kevin", id: 3 },
    { name: "Alphie", id: 4 },
    { name: "Becca", id: 5 },
    { name: "Yumi", id: 6 },
    { name: "Stephen", id: 7 },
  ]);

  const handlePlayerClick = (player) => {
    console.log(players);
    console.log(props.countersNumber);
    setPlayers([...players, player], () => console.log(players));
  };

  const handleResetPlayers = () => {
    setPlayersChosen(0);
    setPlayers([]);
  };

  if (playersChosen == 0) {
    return (
      <div>
        <PlayerList players={currentPlayers} onItemClick={handlePlayerClick} />
        <button onClick={() => setPlayersChosen(1)}>Submit Players</button>
      </div>
    );
  }

  if (playersChosen == 1) {
    if (players.length == props.countersNumber) {
      return (
        <div className="grid grid-cols-2 grid-rows-3 h-full w-full py-10 gap-20">
          {Array.from({ length: props.countersNumber }, (_, index) => (
            <div key={index}>
              <LifeCounter playerName={players[index].name} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          Not enough players players chosen
          <button onClick={handleResetPlayers}>Choose Players Again</button>
        </div>
      );
    }
  }
}
