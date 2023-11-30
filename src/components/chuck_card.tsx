import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {
	chuckGreeting:string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({chuckGreeting}) => {

	return (

		<>
			{}
			<h2> { chuckGreeting }</h2>

			<img className='img__small' src={ChuckImage} alt='A handsome man' />
		</>
	)
}

export default ChuckCard;
