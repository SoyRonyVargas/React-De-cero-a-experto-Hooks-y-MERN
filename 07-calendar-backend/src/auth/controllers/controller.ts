import { User , UserLogin, UserLoginResponse, UserResponse } from '../types/types';
import { validatePassword } from './../helpers/validatePassword';
import { encryptPassword } from '../helpers/encryptPassword';
import { JWTAuthPayload, TypedRequest } from './../../types';
import { generateJWT } from './../helpers/jwt';
import UserModel from '../../models/User';

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
            msg: "Registrado correctamente",
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


export const AuthLogin : TypedRequest<UserLoginResponse | null , UserLogin> = async ( req , res ) => {

    try
    {

        const { email , password } = req.body

        const errorAuth = "Usuario o contraseña incorrectos."

        const UserExist = await UserModel.findOne({ email })

        if( !UserExist )
        {
            
            return res.status(400).json({
                ok: false,
                msg: errorAuth,
                data: null
            })

        }

        const isValid = validatePassword( password , UserExist.password )

        if( !isValid )
        {
            
            return res.status(400).json({
                ok: false,
                msg: errorAuth,
                data: null
            })

        }

        const token = await generateJWT(UserExist._id)

        const user : UserResponse = {
            email: UserExist.email,
            name: UserExist.name,
            _id: UserExist._id,
        }
        
        const response : UserLoginResponse = {
            token,
            user
        }

        return res.status(200).json({
            ok: true,
            msg: "Autenticado correctamente",
            data: response
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

export const RevalidateToken : TypedRequest<UserLoginResponse , User , JWTAuthPayload> = async ( req , res ) => {

    const { id } = req.payload!
    
    const revalidatedToken = await generateJWT( id )

    const UserExist = await UserModel.findById(id)

    if( !UserExist ) return

    const user : UserResponse = {
        email: UserExist.email,
        name: UserExist.name,
        _id: UserExist._id,
    }

    res.json({
        ok: true,
        msg: "Token revalidado",
        data: {
            token: revalidatedToken,
            user: user
        }
    })

}
