import React from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions';
import { Provider } from 'react-redux';
import store from './Components/store/store';
import Results from './Components/Results';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Questions/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
