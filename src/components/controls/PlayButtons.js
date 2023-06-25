import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

export default function PlayButtons(props){
    const [gameParameters, setGameParameters] = useState({
        "speed": 0.5,
        "paused": true
    });

    const cellGrid = props.cellGrid;
    const changeCellGridState = props.changeCellGrid;

    useEffect(() => {
        let timer;

        if(!gameParameters.paused){
            timer = setInterval(() => {
                changeCellGridState(cellGrid.generateNextState());
            }, gameParameters.speed * 1000);
        };
  
        return () => clearInterval(timer);
    }, [gameParameters]);

    function handleParameterChanges(newParameters){
        console.log(newParameters);
        setGameParameters({
            "speed": newParameters.speed == null ? gameParameters.speed : newParameters.speed,
            "paused": newParameters.paused == null ? gameParameters.paused : newParameters.paused,
        });
    }

    return(
        <div id="controls">
            <Button className="control-button" variant="contained" onClick={() => handleParameterChanges({"paused": !gameParameters.paused})}>{gameParameters.paused ? "Play" : "Pause"}</Button>
            <div>
                <span>Game speed:</span>
                <Slider id="game-speed-slider" min={0} max={1} step={0.05} value={gameParameters.speed} onChange={(e, value) => handleParameterChanges({"speed": value})}/>
            </div>
        </div>
    );
}