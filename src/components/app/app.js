import React, { useState, useEffect } from "react";

import "./app.js";

const App = () => {

    const [ss, setSS] = useState(0);
    const [mm, setMM] = useState(0);
    const [hh, setHH] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    let interval;

    const formatTime = (value) => {
        if(value < 10) {
            value = `0${value}`;
        }
        return value;
    }

    const stopwatch = () => {
        setSS(ss + 1);

        if(ss >= 59) {
            setSS(0);
            setMM(mm + 1);
        }

        if(mm >= 59) {
            setMM(0);
            setHH(hh + 1);
        }
    }

    useEffect(() => {
        if(isRunning) {
            interval = setInterval(() => {
                stopwatch();
            }, 1000);
        }
        
        return () => clearInterval(interval);
    }, [stopwatch, isRunning]);


    const start = () => {
        setIsRunning(true);
    }

    const pause = () => {
        setIsRunning(false);
        clearInterval(interval);
    }

    const reset = () => {
        setSS(0);
        setMM(0);
        setHH(0);
        clearInterval(interval);
    }

    return (
        <div>
            <p>{`${formatTime(hh)}:${formatTime(mm)}:${formatTime(ss)}`}</p>
            <div>
                {
                    isRunning ? 
                        <button onDoubleClick={pause} type="button">Pause</button> :
                        <button onClick={start} type="button">Start</button>
                }
            </div>
            <div>
                <button onClick={reset} type="button">Reset</button>
            </div>
        </div>
    )
}

export default App;