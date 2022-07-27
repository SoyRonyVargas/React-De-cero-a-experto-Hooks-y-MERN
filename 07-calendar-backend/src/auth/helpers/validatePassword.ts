import bcrypt from 'bcryptjs'

export const validatePassword = ( password: string , cryptPassword : string ) : boolean => {
  
    const isSame = bcrypt.compareSync( password , cryptPassword )

    return isSame

}
