interface ChuckJokeProps {
    id: number;
    joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id, joke}) => <ul><li className="joke"><strong>{id}:</strong> {joke}</li></ul>

export default ChuckJoke;
