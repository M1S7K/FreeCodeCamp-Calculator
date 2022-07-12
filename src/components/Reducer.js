export const ACTIONS = {
    ADD_DIGIT: 'add digit',
    ADD_OPERATION: 'add operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete digit',
    SWITCH: 'turn off or on',
    EVALUATE: 'evaluate',
}


export const initialState = { 
    onOffButton: 'ON'
  };

const evaluate = ({ currentOperand, previusOperand }) => {
    let computation = previusOperand + currentOperand
    if (computation === '/0'){return 'ERROR'}
    computation = eval(computation)
    return computation.toString()
}

export const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.SWITCH:
            if (state.onOffButton === 'ON'){return {...state, onOffButton: 'OFF', currentOperand: 0}}
            return {...state, onOffButton: 'ON', currentOperand: null, previusOperand: null}
        case ACTIONS.CLEAR:
            if (state.onOffButton === 'ON') {return state}
            return {...state, currentOperand: 0, previusOperand: null}
        case ACTIONS.ADD_DIGIT:
            if (state.onOffButton === 'ON') {return state}
            if (state.currentOperand.length === 13) {return state}
            if (state.currentOperand === 0 && payload.digit === '0') {return state}
            if (payload.digit === '.' && state.currentOperand === 0) {return {...state, currentOperand: `${state.currentOperand}${payload.digit}`}}
            if (payload.digit === '.' && state.currentOperand?.includes('.')) {return state}
            return {...state, currentOperand: `${state.currentOperand || ''}${payload.digit}`}
        case ACTIONS.ADD_OPERATION:
            if (state.onOffButton === 'ON') {return state}
            if (state.currentOperand === 0 && payload.operation !== '-') {return state}
            if (state.currentOperand === '-') {return {...state, previusOperand: `${state.previusOperand.replace(/\*/g, payload.operation)}`, currentOperand: 0}}
            if (state.currentOperand === 0 && payload.operation === '-') {return {...state, currentOperand: payload.operation}}
            if (state.previusOperand == null){return {...state, previusOperand: `${state.currentOperand || ''}${payload.operation}`, currentOperand: 0}}
            return {...state, previusOperand: `${state.previusOperand || ''}${state.currentOperand}${payload.operation}`, currentOperand: 0}
        case ACTIONS.DELETE_DIGIT:
            if (state.onOffButton === 'ON') {return state}
            if (state.currentOperand === 0) {return state}
            if (state.currentOperand.length === 1) {return {...state, currentOperand: 0}}
            return {...state, currentOperand: state.currentOperand.slice(0, -1)}
        case ACTIONS.EVALUATE:
            if (state.onOffButton === 'ON') {return state}
            if (state.previusOperand === undefined || state.previusOperand === null) {return state}
            return {...state, currentOperand: evaluate(state), previusOperand: null}
        default:
            return {state}
    }
    
}