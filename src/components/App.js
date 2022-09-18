import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([])
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiData(data))
  }, [])
  
  return (
    <div className="app">
      <SushiContainer sushiData={sushiData}/>
      <Table />
    </div>
  );
}

export default App;
