import Grid from '@mui/material/Grid';

export default function CellularGrid(props){
    const cellGrid = props.cellGrid;
    const changeCellGridState = props.changeCellGrid;

    const toggleCell = (xIndex, yIndex) => () => {
        const newState = cellGrid.state.map(row => row.map(cell => {
            if(cell.xIndex === xIndex && cell.yIndex === yIndex) {
                console.log("yep");
                cell.toggleState();
            }
            return cell;
        }));

        changeCellGridState(newState);
    }

    return(
        <Grid container id="grid-container">
            {cellGrid.state.map(row => (
                row.map(cell => (
                    <Grid item xs={12/cellGrid.rows}
                    key = {"cell" + cell.xIndex + cell.yIndex}
                    className="grid-item" 
                    style={{background: cell.isAlive ? "#646E6A" : "#1D201F"}} 
                    onClick={toggleCell(cell.xIndex, cell.yIndex)}></Grid>
                ))))}
        </Grid>
    );
}