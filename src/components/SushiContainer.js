import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushiData}) {
  const [sushiDispIndex, setSushiDispIndex] = useState(0)
  const sushiDisp = sushiData.slice(sushiDispIndex, sushiDispIndex + 4)
  function onMoreClick() {
    setSushiDispIndex(sushiDispIndex + 4)
  }

  return (
    <div className="belt">
      {sushiDisp.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi}/>
      ))}
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
