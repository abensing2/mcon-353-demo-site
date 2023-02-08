import logo from './logo.svg';
import Accordion from '@mui/material/Accordion';
import { Button } from "@mui/material";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Accordion>Click to learn more!</Accordion>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Click me</Button>
      </header>
    </div>
  );
}

export default App;
