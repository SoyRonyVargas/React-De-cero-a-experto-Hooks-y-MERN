import bcrypt from 'bcryptjs'

export const encryptPassword = async ( password: string ) : Promise<string> => {
  
    const rounds = 10

    const salt = await bcrypt.genSalt( rounds )

    const hash = await bcrypt.hash( password , salt )

    return hash

}
