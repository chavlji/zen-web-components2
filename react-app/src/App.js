import logo from './logo.svg';
import './App.css';

const value = { label: 'Canadax' };
const options = [
  {label: 'Canadax'},
  {label: 'Bum'},
  {label: 'Luxembourg'}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <zen-dropdown-simple val={value} options={options} input2="input" />
        <zen-simple name="Marry" />
        <p>
          Jan
          Edit <code>src/App.js</code> and save to reload.
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
