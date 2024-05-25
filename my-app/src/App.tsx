import React from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions';
import { Provider } from 'react-redux';
import store from './Components/store/store';
import Results from './Components/Results';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <Questions/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
