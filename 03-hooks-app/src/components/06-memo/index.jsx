import { useState } from "react";
import useCounter from "../../hooks/useCounter"
import Small from './Small'

const MultipleHooks = () => {
  
    const { counter, increment } = useCounter(1);
    const [ show, setShow ] = useState(false);

    return (
        <div className="">
        <h1>Memo</h1>
        <Small value={counter} />
        <hr />
        
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
