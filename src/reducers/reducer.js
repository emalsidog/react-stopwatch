import { START_STOPWATCH, TICK, STOP_STOPWATCH, RESET_STOPWATCH } from "../constants/actionTypes";

const initialState = {
    ss: 0,
    mm: 0,
    hh: 0,
    isRunning: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_STOPWATCH: 
            return {
                ...state,
                isRunning: true,
            }
        case TICK:
            let newSS = state.ss + 1, newMM = state.mm, newHH = state.hh;

            if(state.ss >= 59) {
                newSS = 0;
                newMM = state.mm + 1;
            }
    
            if(state.mm >= 59) {
                newMM = 0;
                newHH = state.hh + 1;
            }
            return {
                ...state,
                ss: newSS,
                mm: newMM,
                hh: newHH
            }
        case STOP_STOPWATCH:
            return {
                ...state,
                isRunning: false,
            }
        case RESET_STOPWATCH:
            return {
                ...state,
                ss: 0,
                mm: 0,
                hh: 0
            }
        default:
            return state;
    }
}

export default reducer;