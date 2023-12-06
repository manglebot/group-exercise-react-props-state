import ChuckImage from "../assets/chuck_norris.jpg";
import greetingsJSON from "../data/greetings.json";

interface Greeting {
  greeting: string;
}

const allGreetings: Greeting[] = greetingsJSON;

const getRandomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * allGreetings.length);
  return (allGreetings[randomIndex] as Greeting).greeting;
};

interface ChuckCardProps {
  chuckGreeting: string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({ chuckGreeting }) => {
  chuckGreeting = getRandomGreeting();

  return (
    <>
      {}
      <h2> {chuckGreeting}</h2>

      <img className="img__small" src={ChuckImage} alt="A handsome man" />
    </>
  );
};

export default ChuckCard;
