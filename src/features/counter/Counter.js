import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'


export function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addvalue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())
  }
  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input 
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button
          onClick={() => dispatch( incrementByAmount(addvalue))}
          >Add Amount</button>
        </div>
        <button
          aria-label="Decrement value"
          onClick={resetAll}
        >
          Reset All
        </button>
        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount: 5
        </button> */}
        {/* <button
          aria-label="Decrement value"
          onClick={(count) => (dispatch) => {
            setTimeout(() => {
              dispatch(incrementByAmount(count))
            }, 1000)}
          }
          >
          set time intervel
        </button> */}
      </div>
    </div>
  )
}