import { TypedMiddleware } from './../types/index';
import mongoose from 'mongoose'

// export const connectionDatabase : TypedMiddleware = async ( _ , __ , next ) => {

//     try 
//     {
        
//         await mongoose.connect((process.env.DB_CNN as string));

//         console.info('Base de datos conectada');

//         next()

//     } 
//     catch ( error : any ) 
//     {
//         throw new Error(error) 
//     }

// }
export const connectionDatabase = async () => {

    try 
    {
        
        await mongoose.connect((process.env.DB_CNN as string));

        console.info('Base de datos conectada');

    } 
    catch ( error : any ) 
    {
        throw new Error(error) 
    }

}