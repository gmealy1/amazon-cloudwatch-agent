import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_APIKEY)
  console.log(process.env.REACT_APP_APISECRET)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test webpage.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
