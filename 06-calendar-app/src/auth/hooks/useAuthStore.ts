import { hideLoading, onAuthFailed, onLogin, onLogout, selectAuthError, selectAuthStatus, selectMsgAuth, setMsgOk, startLoading } from '../../store/auth/authSlice'
import { AuthLogin, AuthRegister, FetchErrorSingle, Response, UserLoginResponse } from '../../types'
import { selectShowLoader } from '../../store/ui/selectors'
import { thunkAuthLogin } from '../../store/auth/thunks'
import { removeToken } from '../helpers/removeToken'
import { hideLoader, showLoader } from '../../store'
import { checkToken } from '../helpers/checkToken'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { useSelector } from 'react-redux'
import AuthAxios from '../../api/auth'

const useAuthStore = () => {

    const isLoadingLoader = useSelector(selectShowLoader)
    const msgErrorAuth = useSelector(selectAuthError)
    const authStatus = useSelector(selectAuthStatus)
    const msgOkAuth = useSelector(selectMsgAuth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateLogin = () => navigate("/auth/login")

    const handleLogin = (user: AuthLogin) => {

        dispatch(thunkAuthLogin(user))

    }

    const handleRegister = async (user: AuthRegister) => {

        try 
        {

            dispatch(startLoading())
            
            const { data : { msg } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth/new', user)
            
            dispatch(setMsgOk(msg))
            
            setTimeout( () => {
                
                dispatch(setMsgOk(null))
                
            } , 6000)

            navigateLogin()

            dispatch(hideLoading())

        }
        catch (error) {
            
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

    const handleCheckAuth = async () => {

        const token = checkToken()

        if (!token) return dispatch(onLogout(null))

        try {

            dispatch(showLoader())

            const { data: { data } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth/validate')

            // await new Promise(resolve => setTimeout(resolve, 2000));

            dispatch(onLogin(data.user))

            dispatch(hideLoader())

        }
        catch (err) {
            dispatch(onLogout("Autenticación fallida"))
        }

    }

    const handleLogout = async () => {

        dispatch(showLoader())

        removeToken()

        dispatch(onLogout(null))

        dispatch(hideLoader())

    }

    return {
        isLoadingLoader,
        authStatus,
        msgOkAuth,
        msgErrorAuth,
        handleLogin,
        handleLogout,
        handleRegister,
        handleCheckAuth
    }

}

export default useAuthStore