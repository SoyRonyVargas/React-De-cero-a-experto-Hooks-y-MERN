import { MiddlewareTokenValidator } from '../../middlewares/middlewareTokenValidator';
import { AuthLogin , AuthRegister , RevalidateToken } from '../controllers'
import { validatorAuthLogin , validatorAuthRegister } from '../validators';
import { MiddlewareValidator } from '../../middlewares';
import { Router } from 'express'

const AuthRouter = Router()

AuthRouter.post( '/new' , validatorAuthRegister , MiddlewareValidator , AuthRegister )

AuthRouter.post( '/' , validatorAuthLogin , MiddlewareValidator , AuthLogin )

AuthRouter.post( '/validate' , MiddlewareTokenValidator ,RevalidateToken )

export default AuthRouter