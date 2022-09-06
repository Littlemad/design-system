import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import {ReactComponent as ReactLogo} from './svg/logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <p>
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
  }
  </React.StrictMode>
);
