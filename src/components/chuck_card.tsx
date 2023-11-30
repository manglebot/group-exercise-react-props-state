// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {

}

const ChuckCard: React.FC<ChuckCardProps> = ({}) => {

	return (

		<>
			{}
			<h2>{ }</h2>

			<img className='img__small' src={ChuckImage} alt='A handsome man' />
		</>
	)
}

export default ChuckCard;
