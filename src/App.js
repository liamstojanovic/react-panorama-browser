import './App.css';
import './styles/wdp.css'
import React, { useState } from 'react';
import Panorama from './components/Panorama';
import inputData from './shared/panorama'


function App() {
  const [input, setInput] = useState(inputData);
  const [spaceId, setSpaceId] = useState(0);
  return (
    <div className="App">
      <Panorama input={input[spaceId]}/>
    </div>
  );
}

export default App;
