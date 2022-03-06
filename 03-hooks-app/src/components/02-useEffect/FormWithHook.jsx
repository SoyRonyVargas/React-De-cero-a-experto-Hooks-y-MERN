import React, { Fragment , useState } from 'react'
import useForm from '../../hooks/useForm'
import Message from './Message'

const FormWithHook = () => {
    
    const [
        state,
        handleInputChange,
        handleSubmit
    ] = useForm()

    const { name , email , password } = state

    return (
        <Fragment>
            <h1>Form With Custom Hook</h1>
            <hr />
            <form onSubmit={handleSubmit}>
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
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name='password'
                            value={password}
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

export default FormWithHook