import { JWTAuthPayload } from './../../types/index';
import { verify } from "jsonwebtoken"

export const validateJWT = ( token : string ) : JWTAuthPayload | null => {

    try
    {

        const decoded = verify( token , process.env.SECRET_JWT_SEED!) as JWTAuthPayload

        return decoded

    }
    catch(err)
    {
        return null
    }

}