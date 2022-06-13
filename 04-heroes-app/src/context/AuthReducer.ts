import { types } from "../types"

export const AuthReducer = ( state : any = {} , action : any ) => {

    switch( action.type )
    {
        case types.login:
            return {
                ...state,
                ...action.payload
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                username: null
            }
        default:
            return state
    }

}