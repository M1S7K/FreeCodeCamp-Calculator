import React, { useReducer } from 'react'
import './App.css'
import DigitButtons from './buttons/DigitButtons'
import OperationButtons from './buttons/OperationButtons'
import { ACTIONS, reducer, initialState } from './Reducer'

function App() {
  const [{onOffButton, currentOperand, previusOperand}, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className='calculator'>
        <div className='calculator-display'id='display'>
          <div className='calculator-previus-operand'>{previusOperand}</div>
          <div className='calculator-current-operand'>{currentOperand}</div>
        </div>
        <div className='calculator-solar-panel'>
            <p className='calculator-solar-panel-logo'>solar energy is our future</p>
          <div className='calculator-solar-panel-cells'>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
            <div className='calculator-solar-panel-cell'></div>
          </div>
          <button className={onOffButton === 'ON' ? 'calculator-switch-on' : 'calculator-switch-off'} onClick={() => dispatch({type: ACTIONS.SWITCH} )}>{onOffButton}</button>
        </div>
        <div className='calculator-buttons'>
          <button className='calculator-button-operation span-two' id="clear" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
          <button className='calculator-button-operation' id="delete" onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
          <OperationButtons className='calculator-button-operation' id='divide' operation='/' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='one' digit='1' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='two' digit='2' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='three' digit='3' dispatch={dispatch} />
          <OperationButtons className='calculator-button-operation' id='multiply' operation='*' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='four' digit='4' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='five' digit='5' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='six' digit='6' dispatch={dispatch} />
          <OperationButtons className='calculator-button-operation' id='subtract' operation='-' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='seven' digit='7' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='eight' digit='8' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='nine' digit='9' dispatch={dispatch} />
          <OperationButtons className='calculator-button-operation' id='add' operation='+' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='decimal' digit='.' dispatch={dispatch} />
          <DigitButtons className='calculator-button-digit' id='zero' digit='0' dispatch={dispatch} />
          <button className='calculator-button-operation span-two' id='equals' onClick={() => dispatch({type: ACTIONS.EVALUATE} )}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
