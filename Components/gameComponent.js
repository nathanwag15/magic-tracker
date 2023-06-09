import Image from "next/image";
import LifeCounter from "./lifecounter";
import PlayerList from "./playerList";
import React, { useState } from "react";

export default function GameComponent(props) {
  const [playersChosen, setPlayersChosen] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPlayers, setCurrentPlayers] = useState([
    {
      name: "Steve",
      id: 1,
      losses: 0,
      wins: 0,
      decks: [
        { deckName: "Gotta Win", commander: "Yidris", wins: 0, losses: 0 },
      ],
    },
    { name: "Alex", id: 2, losses: 0, wins: 0 },
    { name: "Kevin", id: 3, losses: 0, wins: 0 },
    { name: "Alphie", id: 4, losses: 0, wins: 0 },
    { name: "Becca", id: 5, losses: 0, wins: 0 },
    { name: "Yumi", id: 6, losses: 0, wins: 0 },
    { name: "Stephen", id: 7, losses: 0, wins: 0 },
  ]);
  const [trueCount, setTrueCount] = useState(0);

  const handlePlayerClick = (player) => {
    player["lost"] = false;
    player["won"] = false;
    console.log(player);
    console.log(props.countersNumber);
    setPlayers([...players, player], () => console.log(players));
  };

  const handleResetPlayers = () => {
    setPlayersChosen(0);
    setPlayers([]);
  };

  const checkPlayers = () => {
    let trueValue;
    let updatedTrueCount = 0;

    for (let i = 0; i < players.length; i++) {
      const currentItem = players[i].lost;

      if (currentItem === true) {
        updatedTrueCount = updatedTrueCount + 1;
        setTrueCount(updatedTrueCount);
        if (updatedTrueCount === players.length - 1) {
          for (let i = 0; i < players.length; i++) {
            if (players[i].lost === false) {
              const updatedPlayer = [...players];
              updatedPlayer[i] = {
                ...updatedPlayer[i],
                won: true,
              };

              const playersWins = players[i].wins + 1;
              const player = players[i].id;
              console.log(player);
              const updatedPermanentPlayer = [...currentPlayers];
              updatedPermanentPlayer[player] = {
                ...updatedPermanentPlayer[player],
                wins: playersWins,
              };
              setCurrentPlayers(updatedPermanentPlayer);
              console.log(currentPlayers);
              setPlayers(updatedPlayer);
            }
          }
        }
      }
    }
  };

  const handleLoss = (player) => {
    player.lost = true;
    player.losses = player.losses + 1;
    const updatedPermanentPlayer = [...currentPlayers];
    updatedPermanentPlayer[player.index] = {
      ...updatedPermanentPlayer[player.index],
      losses: player.losses,
    };
    const updatedPlayer = [...players];
    updatedPlayer[player.index] = {
      ...updatedPlayer[player.index],
      lost: player.lost,
    };

    setPlayers(updatedPlayer);
    setCurrentPlayers(updatedPermanentPlayer);
    checkPlayers();
  };

  if (playersChosen == 0) {
    return (
      <div>
        <PlayerList
          players={currentPlayers}
          onItemClick={handlePlayerClick}
          count={props.countersNumber}
        />
        <button onClick={() => setPlayersChosen(1)}>Submit Players</button>
      </div>
    );
  }

  if (playersChosen == 1) {
    if (players.length == props.countersNumber) {
      return (
        <div className="game-wrapper">
          {Array.from({ length: props.countersNumber }, (_, index) => (
            <div key={index}>
              <LifeCounter
                index={index}
                player={players[index]}
                handleLoss={handleLoss}
              />
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
