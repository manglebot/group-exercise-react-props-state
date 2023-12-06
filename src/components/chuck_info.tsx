import React from "react";
import infoJSON from "../data/info.json";

interface ChuckInfoProp {
  whalesSaved: number;
  roundHouseKicks: number;
}

const ChuckInfo: React.FC = () => {
  const [{ whalesSaved, roundHouseKicks }] = infoJSON as ChuckInfoProp[];

  return (
    <>
      <p>Number of Whales Saved: {whalesSaved}</p>

      <p>Number of Round House Kicks (in the last day): {roundHouseKicks}</p>
    </>
  );
};

export default ChuckInfo;
