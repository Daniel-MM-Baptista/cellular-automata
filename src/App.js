import CellularGrid from './components/grid/CellularGrid'
import './App.css';
import { useState } from 'react';
import CellGrid from "./components/grid/CellGrid"
import PlayButtons from './components/controls/PlayButtons';

function App() {
  const [cellGrid, setCellGrid] = useState(new CellGrid(20, 20));
  
  function changeCellGridState(newState){
    setCellGrid(grid => ({
      ...cellGrid,
      state: newState
    }));
  }

  return (
    <div className='grid'>
      <CellularGrid cellGrid={cellGrid} changeCellGrid={changeCellGridState}></CellularGrid>
      <PlayButtons cellGrid={cellGrid} changeCellGrid={changeCellGridState}></PlayButtons>
    </div>
  );
}
//<CellularGrid></CellularGrid>
export default App;
