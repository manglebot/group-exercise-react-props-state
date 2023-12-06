import React from "react";

import "./App.css";

import ChuckCard from "./components/chuck_card";
import ChuckInfo from "./components/chuck_info";
import ChuckJokes from "./components/chuck_joke";

function App() {
  return (
    <div className="App">
      <h1>React props and state</h1>
      <ChuckCard />

      <h2>Chuck Info: </h2>
      <ChuckInfo />

      <h2>Jokes: </h2>
      <ChuckJokes />

      <h2>Filtered Jokes: </h2>
      <ChuckJokes filtered />
    </div>
  );
}

export default App;
