"use client";

import Image from "next/image";
import CounterCompiler from "../Components/gameComponent";
import React, { useState } from "react";
import PlayerPicker from "@/Components/playerPicker";
import Link from "next/link";
import AccountDeckDisplay from "../Components/accountDeckDisplay";
import { useEffect } from "react";
import axios from "axios";

export default async function Home() {
  const [apiData, setApiData] = useState(null);

  console.log(apiData);

  const FetchData = async () => {
    const response = await get("localhost5000/user/1");
    const data = await response.json();

    setApiData(data);
    console.log(apiData);
  };

  return (
    <div className="home-page-wrapper">
      <div className="account-page-wrapper">
        <div className="account-page-username-wrapper">
          <div className="name-wrapper">Your Name</div>
          <div className="username-wrapper">Your Username</div>
        </div>
      </div>
      <div className="essential-stats-wrapper">
        <div className="stat-item">
          <div className="stat-name">Total Games Played</div>
          <div className="stat">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-name">Total Wins</div>
          <div className="stat">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-name">Total Losses</div>
          <div className="stat">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-name">W/L Ratio</div>
          <div className="stat">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-name">Decks</div>
          <div className="stat">0</div>
        </div>
      </div>
      <div className="metas-and-decks-wrapper">
        <div className="metas-wrapper">
          <div className="metas-header">
            <div>Meta's</div>
            <div>Games</div>
            <div>Rank</div>
          </div>
          <div className="metas-content-row">
            <div>Meta 1</div>
            <div>12</div>
            <div>12/12</div>
          </div>
        </div>
        <div className="decks-wrapper">
          {apiData && (
            <AccountDeckDisplay
              deckType="Best Deck"
              cardName={"black+lotus"}
              // deck={apiData.decks[0]}
            />
          )}
          <AccountDeckDisplay
            deckType="Best Deck"
            cardName={"black+lotus"}
            // deck={apiData.decks[0]}
          />
          <AccountDeckDisplay deckType="Fav Deck" cardName={"obeka"} />
          <AccountDeckDisplay
            deckType="Worst Deck"
            cardName={"omnath+,+locus+of+rage"}
          />
          <AccountDeckDisplay deckType="Nemesis" cardName={"teshar+,+anc"} />
        </div>
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
      <div>
        ssssssssssssssss\n ssssssssssssss sssssssssssss ssssssssss ssssssssss
      </div>
    </div>
  );
}
