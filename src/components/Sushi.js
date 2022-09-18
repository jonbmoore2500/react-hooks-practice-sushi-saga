import React, {useState} from "react";

function Sushi({sushi, onEatenClick, moneyRemaining}) {
  const {id, name, img_url, price} = sushi
  const [eaten, setEaten] = useState(false)

  function handleEaten() {
    if (moneyRemaining >= price) {
      if (eaten === false) {
        setEaten(true)
        }
        // can't un-eat something!
        onEatenClick(id)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
