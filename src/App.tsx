import React from "react";

import "./App.css";
import { useState } from "react";
import ChuckCard from "./components/chuck_card";
import ChuckInfo from "./components/chuck_info";
import ChuckJokes from "./components/chuck_joke";

function App() {
  const [whalesSaved, setWhalesSaved] = useState<number>(700);
  const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000);

  return (
    <div className="App">
      <h1>React props and state</h1>
      <ChuckCard />

      <h2>Chuck Info: </h2>
      <ChuckInfo whalesSaved={whalesSaved} roundHouseKicks={roundHouseKicks} />

      <h2>Jokes: </h2>
      <ChuckJokes />
    </div>
  );
}

export default App;
