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
      {/* <div className="title">
        <h1>{input[spaceId].title}</h1>
      </div>
      <DirectNavigation spaceId={spaceId} input={input}/>
      <Panorama input={input[spaceId]}/>
      <IncrementalNavigation spaceId={spaceId}/> */}
    </div>
  );
}

export default App;
