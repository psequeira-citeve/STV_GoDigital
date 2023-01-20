import React from "react";
import "./App.css";
import Score from "./Components.js/Score";

const App = () => {
  return (
    <div className="container">
      <div className="titleContainer">
        <h1 className="title">
          STV <span>GoDigital</span>
        </h1>
      </div>
      <div className="cardContainer">
        <div className="card1">
        <img src={require('./Img/imgB.jpg')} alt="card1" />
          <div className="text">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
            <p>Paragraph 4</p>
          </div>
        </div>
        <div className="score" style={{}}>
            <Score/>
          </div>
        <div className="card2">
          <p>Conteúdo do card 2</p>
        </div>
      </div>
    </div>
  );
};

export default App;
