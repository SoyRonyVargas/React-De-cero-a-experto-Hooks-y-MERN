import { NextFunction, Request , Response } from "express";
import { ValidationError } from 'express-validator'

export type TypedRequest<T , BodyRequest> = (
  ( 
    req: Request<any , any, BodyRequest> , 
    res: Response<BasicResponse<T>> , 
    next: NextFunction 
  ) => Promise<any>
)

export type TypedMiddleware = (
  ( 
    req: Request , 
    res: Response<ValidationError[] | undefined>, 
    next: NextFunction 
  ) => void
)

export interface BasicResponse<T> {
  ok: boolean
  msg: string
  data: T
}

export interface ResponseAuth extends BasicResponse<null> {

}