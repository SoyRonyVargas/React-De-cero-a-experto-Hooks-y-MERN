import { AuthLogin , AuthRegister , RevalidateToken } from '../controllers'
import { MiddlewareValidator } from '../../middlewares';
import { validatorAuthLogin } from '../validators';
import { Router } from 'express'

const AuthRouter = Router()

AuthRouter.post( '/new' , validatorAuthLogin , MiddlewareValidator , AuthLogin )

AuthRouter.post( '/register' , AuthRegister )

AuthRouter.post( '/revalidate' , RevalidateToken )

export default AuthRouter