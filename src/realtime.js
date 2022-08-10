import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback, useEffect } from 'react';

function Realtime() {
  const [socketUrl, setSocketUrl] = useState('ws://stream.nakji.network/ws?streams=nakji.evm.0_0_0.chain_tx');
  const [messageHistory, setMessageHistory] = useState([]);

  const ws = new WebSocket(socketUrl);

  ws.onmessage = function (event){
    const json = JSON.parse(event.data);
    try{
      setMessageHistory((prev) => prev.concat(json));
    } catch (err){
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h3>Query https://api.nakji.network/v1/data/nakji.solanatoken.0_0_0.token_trade</h3>
      {messageHistory}
    </div>
  );
}



export default Realtime;
