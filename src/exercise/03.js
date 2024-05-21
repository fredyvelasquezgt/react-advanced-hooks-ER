// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

//create context
const CountContext = React.createContext()

//act as a provider
function CountProvider(props) {
    const [count, setCount] = useState(0)
    const value = [count, setCount]
    return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const [context] = React.useContext(CountContext)
  if(!context) {
    throw new Error('useCount must be render within counterProvider')
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
 
  const [, setCount] = useCount()
  const setCount = () => {}
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
    
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
      
    </div>
  )
}

export default App
