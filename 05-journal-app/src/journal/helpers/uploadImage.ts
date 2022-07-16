import { ResponseCloudinary } from "../types"

export const uploadImage = async ( image : File ) : Promise<ResponseCloudinary | null> => {

    try
    {

        const url = "https://api.cloudinary.com/v1_1/pets4all/image/upload"

        const formdata = new FormData()

        formdata.append( "file" , image )
        
        formdata.append( "upload_preset" , "react-journal" )

        const response = await fetch( url, {
            method: "POST",
            body: formdata
        })

        if( !response.ok ) return null;

        const cleanResponse : ResponseCloudinary = await response.json()

        return cleanResponse

    }
    catch(err)
    {
        return null;
    }

}