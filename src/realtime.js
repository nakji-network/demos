import logo from './logo.png';
import './App.css';
import React, { useState } from 'react';

function Realtime() {
  const socketUrl = 'wss://stream.nakji.network/ws?streams=nakji.evm.0_0_0.chain_tx';
  const [messageHistory, setMessageHistory] = useState([]);

  const ws = new WebSocket(socketUrl);

  ws.onmessage = function (event){
    const json = JSON.parse(event.data);
    console.log(json);
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
      <h3>Websocket ws://stream.nakji.network/ws?streams=nakji.evm.0_0_0.chain_tx</h3>
      {messageHistory}
    </div>
  );
}



export default Realtime;
