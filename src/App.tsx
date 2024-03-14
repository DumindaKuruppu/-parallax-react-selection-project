import React from 'react';
import './App.css';
import SplitPane from "./SplitPane";

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <header className="parallaxLogo">
          <img src={"./parallax_logo.png"} className="App-logo" alt="Parallax Logo"/>
        </header>
        <SplitPane />
      </div>
    </div>
  );
}

export default App;
