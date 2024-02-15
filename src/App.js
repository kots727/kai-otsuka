import logo from './logo.svg';
import {Canvas, makePerlinField} from './gridUtils/canvas.js'
import {ArtCanvas} from './artUtils/artCanvas.js'
import './App.css';
import React, {useState} from "react";
import './gridUtils/Grid.js';
import { GridField } from './gridUtils/Grid.js';

export const Context = React.createContext();
    
function App() {

  const [grid, setGrid] = useState(makePerlinField(300,300,40,30,1,40,0,[0.123, 0.8922397920382235],7));
  return (
    
    <Context.Provider value={[grid,setGrid]}>
    <div className="App">
      <Canvas/>
      <ArtCanvas/>
    </div>
  
    </Context.Provider>
  );
}

export default App;
