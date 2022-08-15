import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <h1>Consultar CEP</h1>
          <form>
            <label></label>
            <input type="text" placeholder="Digite o CEP" />
            <button type="submit">Consultar</button>
            <ul>
              <li>Estado :</li>
              <li>Cidade :</li>
              <li>Rua :</li>
            </ul>
          </form>
        </main>
      </header>
    </div>
  );
}

export default App;
