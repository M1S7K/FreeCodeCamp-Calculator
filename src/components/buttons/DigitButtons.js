import { ACTIONS } from "../Reducer";
import React from 'react'

function DigitButtons({digit, dispatch, id, className}) {
  return (
    <button
        onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit} })}
        id={id}
        digit={digit}
        className={className}
    >
      {digit}
    </button>
  )
}

export default DigitButtons
