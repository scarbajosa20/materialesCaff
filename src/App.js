import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         BIENVENIDA MARIA ROSA A TU STOCK DE CAFF SANT ADRIA
        </p>
        <Link to="/about"
        >
         ENTRAR AL STOCK
        </Link>
      </header>
    </div>
  );
}

export default App;
