import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getConfig } from './services/config.service';
import Routes from './Routes';
import ConfigContext from './context/Config';

function App() {

  const [config, setConfig] = useState({ loading: true, data: {} });

  const { loading, data } = config;

  useEffect(() => {
    async function getConfigAsync(){
      const { data } = await getConfig();
      setConfig({ loading: false, data });
    }
  
    getConfigAsync();
  }
  , []);
  
  return (
    <div className="App">
      <div className="App-header">
          {
            loading && <img src={logo} className="App-logo" alt="logo" />
          }
          {
            data.error && <p>'Error getting config from server'</p>
          }
          <ConfigContext.Provider value={data}>
            <Routes routes={data.routes}/>
          </ConfigContext.Provider>
      </div>
    </div>
  );
}

export default App;
