import React, { Fragment, useState } from 'react'

const CounterApp = () => {
    
    const [ main , setCounter ] = useState({
        counter1: 1,
        counter2: 5
    })

    const  { counter1, counter2 } = main

    const handleSuma = (v) => setCounter({
        ...main,
        counter1: v
    })

    return (
        <Fragment>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr />
            <button onClick={ () => handleSuma( counter1 + 1 )} className="btn btn-primary">
                +1
            </button>
        </Fragment>
    )
}

export default CounterApp
