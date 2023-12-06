import React from "react";
import jokes from "../data/jokes.json";

interface ChuckJokeProp {
  filtered?: boolean;
}

const filteredJoke = jokes[2];

const ChuckJoke: React.FC<ChuckJokeProp> = ({ filtered }) => {
  if (filtered === true) {
    return (
      <div>
        <ul>
          <li className="joke" key={jokes[2].id}>
            <strong>{jokes[2].id}</strong> {jokes[2].joke}
          </li>
        </ul>
      </div>
    );
  }

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
