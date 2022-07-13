export interface ResponseCloudinary {
    asset_id:          string;
    public_id:         string;
    version:           number;
    version_id:        string;
    signature:         string;
    width:             number;
    height:            number;
    format:            string;
    resource_type:     string;
    created_at:        Date;
    tags:              any[];
    bytes:             number;
    type:              string;
    etag:              string;
    placeholder:       boolean;
    url:               string;
    secure_url:        string;
    folder:            string;
    access_mode:       string;
    original_filename: string;
}

export const uploadImage = async ( image : File ) => {

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

        if( !response.ok ) throw new Error()

        const cleanResponse : ResponseCloudinary = await response.json()

        return cleanResponse.secure_url

    }
    catch(err)
    {
        throw new Error()
    }

}