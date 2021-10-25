
describe('Pruebas al demo.test', () => {
    
    test( 'Deben ser iguales los strings' , () => {
        
        
        // 1. INICIALIZACION
        
        const msg = 'Hola mario'
        
        // 2. ESTIMULO
        
        const msg_2 = `Hola mario`
        
        // 3. Observar el comportamiento
        
        expect(msg).toBe(msg_2)
        
        
    })

})