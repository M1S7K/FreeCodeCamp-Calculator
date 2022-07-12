import { ACTIONS } from "../Reducer";
import React from 'react'

function OperationButtons({ operation, dispatch, id, className }) {
  return (
    <button
        onClick={() => dispatch({type: ACTIONS.ADD_OPERATION, payload: {operation} })}
        operation={operation}
        id={id}
        className={className}
    >
      {operation}
    </button>
  )
}

export default OperationButtons
