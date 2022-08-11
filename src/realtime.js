import logo from './logo.png';
import './App.css';
import React, { useState } from 'react';
import { Buffer } from 'buffer';

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
      <div className='Content'>
        <h3>Websocket wss://stream.nakji.network/ws?streams=nakji.evm.0_0_0.chain_tx</h3>
        <div className='Data-window'>
          {messageHistory.map(item => (
            <TxItem data={item.Data} />
          ))}
        </div>
      </div>
    </div>
  );
}

//{"ts":"2022-08-10T11:47:16Z","From":"R6xCX0mMj0dUXh5eUgZO/vnoShI=","Hash":"0x4bdd39c1ac57386e1c530ccbd8399d86e1969bf5ee4e6488edfb4d5867ca97a7","Size":114,"AccountNonce":"119383","Price":"110000000000","GasLimit":"2000000","Recipient":"Yh41LI6OSFSXHojLztl4q5cXbrM=","Payload":"MgDr2A==","V":"3333200035","R":"8180894047959566779","S":"16689833440996372121"}
function TxItem({data: {ts, From, Hash, Size, Price, Recipient, Payload}}) {
  let price_dehex = 0;
  let recep = '';
  try{
    price_dehex = Buffer.from(Price, 'base64');
    recep = Buffer.from(Recipient, 'base64').toString('hex');
  } catch (e) {
    price_dehex = Buffer.from('0', 'base64');
    recep = Buffer.from('0', 'base64').toString('hex');
    console.log(e);
  }
  return (
  <div style={{paddingBottom: '16px'}}>
    <p>{"{"}</p>
    <div style={{paddingLeft: '12px'}}>
      <p>{"\t"}ts: {ts} </p>
      <p>{"\t"}From {'('}not decoded{')'}: {From} </p>
      <p>{"\t"}To {'('}decoded{')'}: {recep} </p>
      <p>{"\t"}Price: {parseInt(price_dehex.toString('hex'), 16)} </p>
    </div>
    <p>{"}"}</p>
  </div>
  )
}

export default Realtime;
