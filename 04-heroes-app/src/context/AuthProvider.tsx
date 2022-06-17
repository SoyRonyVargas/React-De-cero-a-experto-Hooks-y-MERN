import React , { FC, useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { types } from '../types';

interface AuxProps {
    children: React.ReactNode;
    initial?: any
}

const AuthProvider : FC<AuxProps> = ({ children , initial = {} }) => {

    const init = () => {

        try
        {
            
            const user = JSON.parse(window.localStorage.getItem('user')!) 
    
            if( initial )
            {
                
                console.log("entre");
                
                return {
                    logged: !!user,
                    username: user?.username
                }

            }
    
            return initial

        }
        catch(er)
        {
            
            return {
                logged: false,
                username: null
            }
    
        }
    
    }
    
    
    const [ state , dispatch ] = useReducer( AuthReducer , {} , init )

    const login = ( name : string ) => {

        const user = {
            username: name,
            logged: true
        }

        dispatch({
            type: types.login,
            payload: user
        })

        window.localStorage.setItem('user' , JSON.stringify(user))

    }

    const logout = () => {

        dispatch({
            type: types.logout
        })
        
        window.localStorage.removeItem('user')

    }

    const values = {
        ...state,
        login,
        logout
    }

    return (
    <AuthContext.Provider value={values}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider