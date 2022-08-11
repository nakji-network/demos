import './App.css';
import React, { useState } from "react"
import logo from './logo.png'

function Historical() {
  const endpoint = "https://api.nakji.network/v1/data/nakji.solanatoken.0_0_0.token_trade"

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(endpoint)
      .then(response => {
        return response.text()
      })
      .then(data => {
        setData(data.split("\n").filter(x => x != "").map(JSON.parse))
      })
  }

  React.useEffect(()=>{
    fetchData();
  }, [])
    
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Content">
        <h3>Query {endpoint}</h3>
        <div className="Data-window">
            {data.map(d => (
                <div style={{paddingBottom: "16px"}}>
                {Object.entries(d).map(([k, v]) => (
                    <div>
                    {k}: {JSON.stringify(v)}
                    </div>
                ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Historical;
