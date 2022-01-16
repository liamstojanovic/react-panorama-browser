import './App.css';
import './styles/wdp.css'
import React, { useState } from 'react';
import inputData from './shared/panoramas'
import Navigation from './components/Navigation';


function App() {
  const [input, setInput] = useState(inputData);
  return (
    <div className="App">
      <Navigation input={input}/>
    </div>
  );
}

export default App;
