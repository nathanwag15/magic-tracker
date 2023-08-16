import React from "react";
import backgroundPicture from "../public/images/Bronzehide-Lion-Theros-Beyond-Death-MtG-Art.jpg";
import { useEffect, useState } from "react";

export default function accountDeckCard(props) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://api.scryfall.com/cards/named?fuzzy=${props.name}`)
      .then((response) => response.json())
      .then((data) => setApiData(data.image_uris.art_crop))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const percentage = "20";
  console.log(props.cardName);

  const image = apiData;
  return (
    <div
      className="single-deck-wrapper"
      style={{
        backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0), 0%, rgba(42, 45, 49, 0.5) 90%), url(${image})`,
      }}
    >
      <div className="title-wrapper">
        <div className="deck-type-indicator">{props.deckType}</div>
        <div className="deck-name">Bronzehilde Lion</div>
      </div>
      <div className="stats-wrapper">
        <div className="win-loss-circle-wrapper">
          <div className="c100 p20 center">
            <span>{percentage}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
        </div>
        <div className="important-info-wrapper">
          <div className="card-info-item">
            <div>ELO:</div>
            <div>1500</div>
          </div>
          <div className="card-info-item">
            <div>Games Played</div>
            <div>150</div>
          </div>
          <div className="card-info-item">
            <div>Wins:</div>
            <div>1500</div>
          </div>
          <div className="card-info-item">
            <div>Losses:</div>
            <div>1500</div>
          </div>
        </div>
      </div>
    </div>
  );
}
