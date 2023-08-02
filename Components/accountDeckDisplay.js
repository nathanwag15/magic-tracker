import React from "react";
import backgroundPicture from "../public/images/Bronzehide-Lion-Theros-Beyond-Death-MtG-Art.jpg";
export default function accountDeckCard(props) {
  const somePic =
    "https://cards.scryfall.io/art_crop/front/c/6/c65f4d9d-aa87-439c-8db5-3789cabcce4c.jpg?1580351071";
  const percentage = "20";
  return (
    <div
      className="single-deck-wrapper"
      style={{
        background: `linear-gradient(360deg, rgba(0, 0, 0, 0.8), 10%, rgba(42, 45, 49, 0.8) 40%), url(${somePic});`,
        backgroundPosition: "50% 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
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
            <div>ELO:</div>
            <div>1500</div>
          </div>
          <div className="card-info-item">
            <div>ELO:</div>
            <div>1500</div>
          </div>
        </div>
      </div>
    </div>
  );
}
