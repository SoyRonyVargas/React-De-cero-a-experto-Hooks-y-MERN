import { check, ValidationChain } from 'express-validator'
import { CreateEventValidator } from './create';

export const EditEventValidator : ValidationChain[] = [
    ...CreateEventValidator,
    check("_id" , "Id no valido").not().isEmpty(),
]
