import React, { Component, useState, useEffect, useRef } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [remainingTime, setRemainingTime] = React.useState("");
  const intervalRef = useRef();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value + " <--");
      if (isNaN(event.target.value)) {
        setRemainingTime(0);
      } else {
        setRemainingTime(Math.floor(event.target.value));
      }
      // decByOne();
      // useEffect(() => {
      //   setInterval(decByOne, 1000);
      // });
      // startTimer();
    }
  };
  // const setChange = () => {
  //   changed = false;
  // };

  useEffect(() => {
    console.log(remainingTime);
    if (remainingTime === 0 || !remainingTime) {
      return;
    }
    const timerId = setInterval(decByOne, 1000);
    intervalRef.current = timerId;
    console.log("entered");
    return () => {
      clearInterval(intervalRef.current);
    };
  });
  let decByOne = () => {
    // let temp = remainingTime - 1;
    // console.log(remainingTime);
    setRemainingTime(remainingTime - 1);
    // setCount(1);
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
