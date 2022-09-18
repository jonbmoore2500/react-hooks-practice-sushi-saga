import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [moneyRemaining, setMoneyRemaining] = useState(150)
  const [sushiData, setSushiData] = useState([])
  const [plates, setPlates] = useState([])
  
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiData(data))
  }, [])

  function subtractMoney(id) {
    setMoneyRemaining(moneyRemaining - sushiData[id - 1].price)
  }

  function addPlate(id) {
    setPlates([...plates, id])

  }

  return (
    <div className="app">
      <SushiContainer 
        sushiData={sushiData} 
        moneyRemaining={moneyRemaining} 
        subtractMoney={subtractMoney} 
        addPlate={addPlate}
      />
      <Table moneyRemaining={moneyRemaining} plates={plates}/>
    </div>
  );
}

export default App;
