import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushiData, moneyRemaining}) {
  const [sushiDispIndex, setSushiDispIndex] = useState(0)
  const sushiDisp = sushiData.slice(sushiDispIndex, sushiDispIndex + 4)
  function onMoreClick() {
    setSushiDispIndex(sushiDispIndex + 4)
  }

  function handleEaten(eatenId) {
    console.log(eatenId)
    console.log(moneyRemaining)
  }

  return (
    <div className="belt">
      {sushiDisp.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} onEatenClick={handleEaten} moneyRemaining={moneyRemaining}/>
      ))}
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
