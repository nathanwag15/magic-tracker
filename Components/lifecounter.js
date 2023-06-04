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

  const handleLoss = () => {
    props.handleLoss(props.player);
    setLoss(true);
  };

  if (loss == true) {
    return (
      <div className="score-count-wrapper">
        <div className="lose-text">Loser</div>
      </div>
    );
  }
  if (props.player.won == true) {
    return <div>You Won!</div>;
  } else {
    return (
      <div className="score-count-wrapper">
        <button
          className="incrementer-wrapper"
          style={{ borderRadius: "15px 0px 0px 15px" }}
          onClick={incrementUp}
        >
          +
        </button>

        <div className="score-wrapper  text-black">
          <div className="life-counter-player-name">{props.player.name}</div>
          <div className="score text-5xl">{number}</div>
          <button className="lost-button rounded-md " onClick={handleLoss}>
            I lost
          </button>
        </div>
        <button
          className="incrementer-wrapper text-black text-2xl rounded-r-xl"
          style={{ borderRadius: "0px 15px 15px 0px" }}
          onClick={incrementDown}
        >
          -
        </button>
      </div>
    );
  }
}
