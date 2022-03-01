import logo from './logo.svg';
import './App.css';
import { Spinbutton } from 'semantic-ui-react-spinbutton';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Spinbutton placeholder='Placeholder' />
      </header>
    </div>
  );
}

export default App;
