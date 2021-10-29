import { getGifs } from "../helpers/getGifs"

describe('Probando al helper getgifs', () => {
    
    test('Deberia de traer 10 elementos', async () => {
        
        const gifs = await getGifs('Mia khalifa');
        
        expect(gifs.length).toBe(10);

    })
    
    test('Deberia de traer 0 elementos', async () => {
        
        const gifs = await getGifs('');
        
        console.log(gifs);

        expect(gifs.length).toBe(0);

    })

})
