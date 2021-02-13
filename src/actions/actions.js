import { START_STOPWATCH, TICK, STOP_STOPWATCH, RESET_STOPWATCH } from "../constants/actionTypes";

export const startStopwatch = () => ({
    type: START_STOPWATCH,
});

export const tick = () => ({
    type: TICK
});

export const pauseStopwatch = () => ({
    type: STOP_STOPWATCH
});

export const resetStopwatch = () => ({
    type: RESET_STOPWATCH
});