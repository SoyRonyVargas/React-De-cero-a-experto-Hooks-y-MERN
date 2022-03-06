import useCounter from '../../hooks/useCounter'
import React from 'react'

const CounterHook = () => {
    
    const { counter , increment , decrement , reset } = useCounter(500)

    return (
        <div>
            <h1>Counter With Hook</h1>
            <h1>Counter  { counter }</h1>
            <hr />
            <button onClick={increment} className="btn btn-primary mx-1">
                +1
            </button>
            <button onClick={reset} className="btn btn-primary mx-1">
                Reset
            </button>
            <button onClick={decrement} className="btn btn-primary ml-4">
                +1
            </button>
        </div>
    )
}

export default CounterHook
