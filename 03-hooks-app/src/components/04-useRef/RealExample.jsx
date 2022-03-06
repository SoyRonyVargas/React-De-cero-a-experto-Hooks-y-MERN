import React, { useState } from 'react'
import MultipleHooks from '../03-custom-hooks/MultipleHooks'

const RealExample = () => {
    
    const [ show , setShow ] = useState(false)
    
    return (
        <div>
            
            <h1>RealExampleRef</h1>
            
            <hr />

            <button onClick={ () => setShow(!show) } className="btn btn-primary">
                {
                    show ? 'Show' : 'Hide'
                }
            </button>

            {
                show &&
                <MultipleHooks/>
            }

        </div>
    )
}

export default RealExample
