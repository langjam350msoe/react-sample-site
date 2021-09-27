import logo from './logo.svg';
import { 
  Link, 
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch 
} from 'react-router-dom'
import './App.css';
import './App2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Router>
          <a href="/App2"><h1>Route Example</h1></a>
        </Router>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
