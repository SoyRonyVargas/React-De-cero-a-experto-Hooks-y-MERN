import { check, ValidationChain } from 'express-validator'

export const validatorAuthLogin : ValidationChain[] = [
    check("name" , "El nombre es obligatorio").not().isEmpty(),
    check("email" , "El correo es obligatorio").isEmail(),
    check("password" , "La contraseña es obligatoria").isLength({ min: 6 })
]