import { validatePassword } from './../helpers/validatePassword';
import { encryptPassword } from '../helpers/encryptPassword';
import { JWTAuthPayload, TypedRequest } from './../../types';
import { User , UserLogin } from '../types/types';
import { generateJWT } from './../helpers/jwt';
import UserModel from '../../models/User';
import { JwtPayload } from 'jsonwebtoken';

export const AuthRegister : TypedRequest<string | null , User> = async ( req , res ) => {

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

        NewUser.password = await encryptPassword(NewUser.password)

        await NewUser.save()

        console.log(NewUser);
        console.log(NewUser.id);

        res.status(201).json({
            ok: true,
            msg: "Autenticado correctamente",
            data: NewUser.id
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


export const AuthLogin : TypedRequest<string | null , UserLogin> = async ( req , res ) => {

    try
    {

        const { email , password } = req.body

        req.payload

        const UserExist = await UserModel.findOne({ email })

        if( !UserExist )
        {
            
            return res.status(400).json({
                ok: false,
                msg: "Autenticacion fallida",
                data: null
            })

        }

        const isValid = validatePassword( password , UserExist.password )

        if( !isValid )
        {
            
            return res.status(400).json({
                ok: false,
                msg: "Autenticacion fallida",
                data: null
            })

        }

        const token = await generateJWT(UserExist.id)

        return res.status(200).json({
            ok: true,
            msg: "Autenticado correctamente",
            data: token
        })

    }
    catch(err)
    {

        res.json({
            ok: true,
            msg: "Registrado correctamente",
            data: null
        })

    }

}

export const RevalidateToken : TypedRequest<string , User , JWTAuthPayload> = async ( req , res ) => {

    const { id } = req.payload!
    
    const revalidatedToken = await generateJWT( id )

    res.json({
        ok: true,
        msg: "Token revalidado",
        data: revalidatedToken
    })

}