import { sign } from 'jsonwebtoken'

export const generateJWT = async ( id: string ) => {
    return new Promise<string>( ( resolve , reject ) => {

        try
        {
            
            const payload = {
                id
            }
    
            const token = sign( payload , process.env.SECRET_JWT_SEED! , {
                expiresIn: '2h'
            })

            resolve(token)

        }
        catch(err)
        {
            reject(err)
        }

    })
}