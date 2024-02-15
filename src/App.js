import logo from './logo.svg';
import {Canvas} from './gridUtils/canvas.js'
import {ArtCanvas} from './artUtils/artCanvas.js'
import './App.css';
import './gridUtils/Grid.js';
window.grid = null;
function App() {
  return (
    <div className="App">
      
      <ArtCanvas/>
      <Canvas/>
    </div>
  );
}

export default App;
