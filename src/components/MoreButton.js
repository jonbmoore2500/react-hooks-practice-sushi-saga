import React from "react";

function MoreButton({onMoreClick}) {
  function handleMore() {
    onMoreClick()
  }

  return <button onClick={handleMore}>More sushi!</button>;
}

export default MoreButton;
