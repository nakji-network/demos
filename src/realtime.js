import logo from './logo.png';
import './App.css';
import React, { useState } from 'react';

function Realtime() {
  const socketUrl = 'wss://stream.nakji.network/ws?streams=nakji.evm.0_0_0.chain_tx';
  const [messageHistory, setMessageHistory] = useState([]);

  const ws = new WebSocket(socketUrl);

  ws.onmessage = function (event){
    const jsons = event.data.split("\n").map(JSON.parse);
    try{
      setMessageHistory((prev) => jsons.concat(prev));
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
      {messageHistory.map(item => (
        <TxItem data={item.Data} />
      ))}
    </div>
  );
}

//{"ts":"2022-08-10T11:47:16Z","From":"R6xCX0mMj0dUXh5eUgZO/vnoShI=","Hash":"0x4bdd39c1ac57386e1c530ccbd8399d86e1969bf5ee4e6488edfb4d5867ca97a7","Size":114,"AccountNonce":"119383","Price":"110000000000","GasLimit":"2000000","Recipient":"Yh41LI6OSFSXHojLztl4q5cXbrM=","Payload":"MgDr2A==","V":"3333200035","R":"8180894047959566779","S":"16689833440996372121"}
function TxItem({data: {ts, From, Hash, Size, Price, Recipient, Payload}}) {
  return (
  <div>
    {ts} {From}
  </div>
  )
}



export default Realtime;
