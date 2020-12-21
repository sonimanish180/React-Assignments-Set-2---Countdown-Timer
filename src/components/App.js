import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [remainingTime, setRemainingTime] = React.useState("");
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value + " <--");
      setRemainingTime(event.target.value);
      // decByOne();
      // useEffect(() => {
      //   setInterval(decByOne, 1000);
      // });
      // startTimer();
    }
  };

  let id;

  useEffect(() => {
    console.log(remainingTime);
    if (remainingTime === 0) {
      return;
    }
    if (remainingTime) {
      clearTimeout(startTimer);
      startTimer();
    }

    console.log("entered");
  });
  const startTimer = () => {
    id = setTimeout(decByOne, 1000);
  };

  let decByOne = () => {
    // let temp = remainingTime - 1;
    // console.log(remainingTime);
    setRemainingTime(remainingTime - 1);
  };

  // const startTimer = () => setInterval(decByOne, 1000);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
