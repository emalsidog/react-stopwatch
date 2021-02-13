import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { startStopwatch, tick, pauseStopwatch, resetStopwatch } from "../../actions/actions";

import "./app.js";

const App = props => {
    const { isRunning, ss, mm, hh, startStopwatch, tick, pauseStopwatch, resetStopwatch } = props;
    
    let interval;

    const formatTime = (value) => {
        if(value < 10) {
            value = `0${value}`;
        }
        return value;
    }

    useEffect(() => {
        if(isRunning) {
            interval = setInterval(() => {
                tick();
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [tick, isRunning]);


    const start = () => {
        startStopwatch();
    }

    const pause = () => {
        pauseStopwatch();
    }

    const reset = () => {
        resetStopwatch();
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    startStopwatch: () => dispatch(startStopwatch()),
    tick: () => dispatch(tick()),
    pauseStopwatch: () => dispatch(pauseStopwatch()),
    resetStopwatch: () => dispatch(resetStopwatch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);