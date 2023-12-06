import React from "react";
import jokes from "../data/jokes.json";

const ChuckJoke: React.FC = () => {
  return (
    <div>
      <ul>
        {jokes.map((joke) => (
          <li className="joke" key={joke.id}>
            <strong>{joke.id}</strong> {joke.joke}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChuckJoke;
