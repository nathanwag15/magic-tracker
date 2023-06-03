"use client";
import React, { useState } from "react";

export default function LifeCounter(props) {
  const [number, setNumber] = useState(40);
  const [loss, setLoss] = useState(false);

  // incrementUp() {
  //   this.setState({
  //     number: this.state.number + 1,
  //   }),
  //     function () {
  //       if (this.state.number <= 0) {
  //         console.log("hello");
  //         this.setState({ loss: true });
  //       }
  //       console.log(this.state);
  //     };
  // }

  // incrementDown() {
  //   var updatedNumber = this.state.number - 1;
  //   if (updatedNumber <= 0) {
  //     console.log("hello");
  //     this.setState({ loss: true });
  //   }
  //   this.setState({
  //     number: updatedNumber,
  //   });
  // }

  // loserButtonTrigger() {
  //   console.log("why?");
  //   if (this.state.loss == false) {
  //     this.setState({
  //       loss: true,
  //     });
  //   }
  // }

  const incrementDown = () => {
    var updatedNumber = number - 1;
    if (updatedNumber <= 0) {
      console.log("hello");
      setLoss(true);
    }
    setNumber(updatedNumber);
  };

  const incrementUp = () => {
    var updatedNumber = number + 1;
    if (updatedNumber <= 0) {
      console.log("hello");
      setLoss(true);
    }
    setNumber(updatedNumber);
  };

  if (loss == true) {
    return (
      <div className="score-count-wrapper rounded-xl">
        <div className="text-5xl text-red-500">Loser</div>
      </div>
    );
  } else {
    return (
      <div className="score-count-wrapper rounded-xl">
        <button
          className="incrementer-wrapper text-black text-2xl rounded-l-xl"
          onClick={incrementUp}
        >
          +
        </button>

        <div className="score-wrapper  text-black">
          <div className="life-counter-player-name">{props.playerName}</div>
          <div className="score text-5xl">{number}</div>
          <button
            className="lost-button rounded-md "
            onClick={() => setLoss(true)}
          >
            I lost
          </button>
        </div>
        <button
          className="incrementer-wrapper text-black text-2xl rounded-r-xl"
          onClick={incrementDown}
        >
          -
        </button>
      </div>
    );
  }
}
