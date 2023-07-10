import CellularGrid from './components/grid/CellularGrid'
import './App.css';
import { useState } from 'react';
import CellGrid from "./components/grid/CellGrid"
import PlayButtons from './components/controls/PlayButtons';

function App() {
  const [cellGrid, setCellGrid] = useState(new CellGrid(20, 20));
  
  function changeCellGridState(newState){
    setCellGrid({
      ...cellGrid,
      state: newState
    });
  }

  return (
    <div>
      <PlayButtons cellGrid={cellGrid} changeCellGrid={changeCellGridState} />
    </div>
  );
}
//<CellularGrid cellGrid={cellGrid} changeCellGrid={changeCellGridState}></CellularGrid>
export default App;
