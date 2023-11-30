interface chuckInfoProp {
	whalesSaved : number;
	roundHouseKicks : number;
}

const ChuckInfo: React.FC<chuckInfoProp> = ({whalesSaved, roundHouseKicks}) => {

	return (
		<>
			<p>Number of Whales Saved: { whalesSaved }</p>

			<p>Number of Round House Kicks (in the last day):  { roundHouseKicks }</p>
		</>);
}

export default ChuckInfo;
