import './App.css';
import './styles/wdp.css'
import React, { useState } from 'react';
import Panorama from './components/Panorama';
import DirectNavigation from './components/Navigation/DirectNavigation';
import IncrementalNavigation from './components/Navigation/IncrementalNavigation';
import inputData from './shared/panoramas'


function App() {
  const [input, setInput] = useState(inputData);
  const [spaceId, setSpaceId] = useState(0);
  return (
    <div className="App">
      <div className="title">
        <h1>{input[spaceId].title}</h1>
      </div>
      <Panorama input={input[spaceId]}/>
      <DirectNavigation spaceId={spaceId}/>
      <IncrementalNavigation spaceId={spaceId}/>
    </div>
  );
}

export default App;
