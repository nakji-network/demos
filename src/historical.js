import './App.css';
import React, { useState } from "react"
import logo from './logo.png'

function Historical() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.nakji.network/v1/data/nakji.solanatoken.0_0_0.token_trade")
      .then(response => {
        return response.text()
      })
      .then(data => {
        console.log(data.split("/").map(JSON.parse))
        setData(data)
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
      <h3>Query https://api.nakji.network/v1/data/nakji.solanatoken.0_0_0.token_trade</h3>
      {data}
    </div>
  );
}

export default Historical;
