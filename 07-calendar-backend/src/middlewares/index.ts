import { validationResult } from "express-validator";
import { TypedMiddleware } from "../types";

export const MiddlewareValidator: TypedMiddleware<any> = (req, res, next) => {
  
  const errors = validationResult(req);

  console.log(errors);

  const errorsArray = errors.array();

  if (!errors.isEmpty()) {
    return res.status(400).json(errorsArray);
  }

  next();

};