import React, { useEffect } from 'react'

const Message = () => {
    
    useEffect(() => {
        
        const handleMove = (event) => {

            console.log(event.screenX);
            console.log(event.screenY);

        }

        window.addEventListener('mousemove' , handleMove )

        console.log('component mounted');
        
        return () => {
            
            console.log('component unmounted');

            window.removeEventListener('mousemove' , handleMove)

        }

    }, [])

    return (
        <div>
            <h3>Header</h3>
        </div>
    )
}

export default Message
