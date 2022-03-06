import { useMemo, useState } from "react";
import useCounter from "../../hooks/useCounter"

const MultipleHooks = () => {
  
    const { counter, increment } = useCounter(1);
    const [ show, setShow ] = useState(false);

    const process = ( it = 1 ) => {

        for( let i = 0 ; i < it ; i++ )
        {
            console.log('iteracion...');
        }

        return it + ' iteraciones realizadas.'

    }

    const memoProcess = useMemo( () => process(counter) , [ counter ] )	

    return (
        <div className="">
            
            <h1>useMemo {counter} </h1>
            
            <hr />

            <p>
                { memoProcess }
            </p>
            
            <button onClick={increment} className="btn btn-primary mx-1">
                Next 
            </button>
            <button onClick={() => {
                setShow(!show)
            }} className="btn btn-primary">
                Show / Hide { JSON.stringify(show , null , 3)} 
            </button>
        </div>
    );
};

export default MultipleHooks;
