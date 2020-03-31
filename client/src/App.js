import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getConfig } from './services/config.service';

function App() {

  
  const [config, setConfig] = useState({ loading: true, data: {} });
  const { loading, data } = config;

  useEffect(() => {
    async function getConfigAsync(){
      const { data } = await getConfig();
      setConfig({ data });
    }
  
    getConfigAsync();
  }
  , []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            loading && 'Getting config from server...'
          }
          {
            data.error && 'Error getting config from server'
          }
          {
            data.name && `The client is: ${data.name}`
          }
        </p>
      </header>
    </div>
  );
}

export default App;
