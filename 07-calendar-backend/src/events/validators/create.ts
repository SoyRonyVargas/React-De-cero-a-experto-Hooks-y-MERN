import { check, ValidationChain } from 'express-validator'

export const CreateEventValidator : ValidationChain[] = [
    check("title" , "El titulo es obligatorio").not().isEmpty(),
    check("notes" , "Las notas son obligatoris").not().isEmpty(),
    check("start" , "Fecha de inicio obligatoria").not().isEmpty(),
    check("end" , "El nombre es obligatorio").not().isEmpty(),
    // check("start" , "Fecha no valida").isDate(),
    // check("end" , "Fecha no valida").isDate(),
]
