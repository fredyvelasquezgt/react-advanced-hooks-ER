// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
 
  //accepts the current state and the action (dispatch) this is the "setSomething" stuff
  const countReducer = (state, newState) => {
    return newState;
  }

  //receives a function and a initialValue
  const [count, setCount] = React.useReducer(countReducer, initialCount)

 
  
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
