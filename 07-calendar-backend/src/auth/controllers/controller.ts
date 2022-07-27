import { TypedRequest } from './../../types';
import UserModel from '../../models/User';
import { User } from '../types/types';

export const AuthLogin : TypedRequest<User | null , User> = async ( req , res ) => {

    try
    {

        const { email } = req.body

        const UserExist = await UserModel.findOne({ email })

        if( UserExist )
        {
            
            return res.status(400).json({
                ok: false,
                msg: "Usuario ya registrado",
                data: null
            })

        }

        const NewUser = new UserModel(req.body)

        await NewUser.save()

        res.status(201).json({
            ok: true,
            msg: "Autenticado correctamente",
            data: null
        })

    }
    catch(err)
    {

        res.status(500).json({
            ok: false,
            msg: "Error del servidor",
            data: null
        })

    }

}
export const AuthRegister : TypedRequest<number , User> = async ( req , res ) => {

    res.json({
        ok: true,
        msg: "Registrado correctamente",
        data: 1
    })

}

export const RevalidateToken : TypedRequest<number , User> = async ( req , res ) => {

    res.json({
        ok: true,
        msg: "Registrado correctamente",
        data: 1
    })

}
