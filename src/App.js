//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [score, setScore] = useState(0)
  let [score1, setScore1] = useState(0)

  const homeTd = event => {
    setScore(score + 6)
  }

  const homeFg = event => {
    setScore(score + 1)
  }

  const awayTd = event => {
    setScore1(score1 + 6)
  }

  const awayFg = event => {
    setScore1(score1 + 1)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{score1}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTd}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFg}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTd}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFg}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}
const rootElement = document.querySelector("#root")
ReactDOM.render(<App />, rootElement);
export default App;
