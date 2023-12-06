import React from "react";
import jokes from "../data/jokes.json";

interface ChuckJokeProp {
  filtered?: boolean;
}

const ChuckJoke: React.FC<ChuckJokeProp> = ({ filtered }) => {
  if (filtered === true) {
    const { id, joke } = jokes[2];
    return (
      <div>
        <ul>
          <li className="joke" key={id}>
            <strong>{id}</strong> {joke}
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
