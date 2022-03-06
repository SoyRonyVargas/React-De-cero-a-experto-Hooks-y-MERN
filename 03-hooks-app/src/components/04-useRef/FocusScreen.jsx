import React, { useRef } from 'react'

const FocusScreen = () => {
    
    const inputRef = useRef()

    const handleClick = () => {

        inputRef.current.select()

        console.log(inputRef);
        
    }

    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Name..." ref={inputRef} />
            <button 
                className="btn btn-primary mt-3"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
