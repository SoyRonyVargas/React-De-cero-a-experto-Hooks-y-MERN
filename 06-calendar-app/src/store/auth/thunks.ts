import { UserLoginResponse , Response , AuthLogin, FetchErrorSingle } from "../../types";
import { hideLoading, onAuthFailed, onLogin, startLoading } from "./authSlice";
import { saveToken } from "../../auth/helpers/saveToken";
import { ThunkFunction ,  } from "../../types";
import AuthAxios from "../../api/auth";

export const thunkAuthLogin = ( user : AuthLogin ) : ThunkFunction => async ( dispatch ) => {

    try 
    {
        
        dispatch(startLoading())
        
        const { data : { data } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth' , user)
        
        window.localStorage.setItem('view', 'month')

        saveToken(data.token)

        dispatch(onLogin(data.user))

        dispatch(hideLoading())

    } 
    catch ( error ) 
    {
        const e = error as FetchErrorSingle

        if( e.response )
        {
            const { msg } = e.response.data
            
            dispatch(onAuthFailed(msg))
            
            dispatch(hideLoading())
            
            setTimeout( () => {
                
                dispatch(onAuthFailed(null))

            } , 6000)

        }
    }

}