import React from "react";
import "./Score.css";

const Score = () => {
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="section2">
      <div className="letters-container">
        <h2 className="score-title">Score :</h2>
      </div>
      <div className="circle-container">
        <div className="letters-container">
          {letters.map((letter, index) => (
            <div key={index} className={`letter-container letra-` + letter}>
              <div className="letter">{letter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Score;
