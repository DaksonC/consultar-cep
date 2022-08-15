import logo from './logo.svg';
import './App.css';
import { api } from './services/api';
import { useState } from 'react';

type CEPInfo = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  cep: number;
}

function App() {
  const [adrress, setAddress] = useState<CEPInfo>();
  const [cep, setCep] = useState<string>();
  const validateCEP = cep?.length === 8;

  function buscarCEP() {
    if(validateCEP) {
      api.get(`${cep}/json/`)
        .then((res) => {
          if(res.data.erro) {
            alert('CEP não encontrado');
          }
          setAddress(res.data);
        })
        .catch(err => console.log(err));
    }
  }
  console.log(adrress);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <h1>Consultar CEP</h1>
          <input 
              type="nubmer" 
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <button 
              type="button"
              onClick={buscarCEP}
            >
              Consultar
            </button>
           <input
              id='address'
              type="text"
              value={adrress?.uf}
            />
            <input
            id='address'
              type="text"
              value={adrress?.localidade}
            />
            <input
              id='address'
              type="text"
              value={adrress?.bairro}
            />
            <input
              id='address'
              type="text"
              value={adrress?.logradouro}
            />
        </main>
      </header>
    </div>
  );
}

export default App;
