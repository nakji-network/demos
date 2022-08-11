import logo from './logo.png';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/historical" target="blank">
          <h2>
            Historical Data Example
          </h2>
        </Link>
        <Link to="/realtime" target="blank">
          <h2>
            Real-time Data Example
          </h2>
        </Link>
      </header>
    </div>
  );
}

export default App;
