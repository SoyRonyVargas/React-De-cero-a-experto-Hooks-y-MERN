import React, { Fragment , useEffect, useState } from 'react'
import Message from './Message'

const Simpleform = () => {
    
    const [ state , setState ] = useState({
        name: '',
        email: ''
    })

    const { email , name } = state

    useEffect( () => {
        // console.log('hey');
    } , [])
    
    useEffect( () => {
        
        // console.log('FORM CAMBIO');

    } , [state])
    
    useEffect( () => {
        
        // console.log('email CAMBIO');

    } , [state.email])
    
    const handleInputChange = ( event ) => {

        const { name , value } = event.target

        setState({
            ...state,
            [name]: value
        })

    }

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr />
            <form>
                <div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    {
                        name == 'mario'
                        && 
                        <Message/>
                    }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

export default Simpleform
