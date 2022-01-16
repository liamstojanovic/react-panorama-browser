import './App.css';
import './styles/wdp.css'
import React, { useState } from 'react';
import Panorama from './components/Panorama/Panorama';
import DirectNavigation from './components/Navigation/DirectNavigation';
import IncrementalNavigation from './components/Navigation/IncrementalNavigation';
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
