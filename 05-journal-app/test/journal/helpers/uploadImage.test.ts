import { uploadImage } from "../../../src/journal/helpers/uploadImage"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({ 
    cloud_name: 'pets4all', 
    api_key: '348474655698788', 
    api_secret: 'MmjVV3K-wmMzKKRAGCqMnzZfq6k',
    secure: true
});

describe('Probando el helper para subir imagenes a cloudinary', () => { 

    test('deberia de subirse correctamente', async () => { 

        const imageUrl = "https://www.soy502.com/sites/default/files/styles/full_node/public/2022/Feb/05/meme_perrito_cuando_no_quieres_dar_explicaciones_soy502_guatemala.jpg"

        const response = await fetch(imageUrl)

        const blob = await response.blob()

        const file = new File( [blob] , "image.jpg" )

        const responseUpload = await uploadImage( file )

        expect( typeof responseUpload ).toBe("object")
        
        expect( responseUpload?.secure_url.length ).toBeGreaterThan(0)

        const responseDelete : any = await cloudinary.api.delete_resources( [ responseUpload?.public_id! ] )

        // console.log({responseDelete});

    })

})