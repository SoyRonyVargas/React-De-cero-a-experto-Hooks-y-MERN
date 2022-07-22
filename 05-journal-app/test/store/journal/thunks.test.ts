import { addEmptyNote, setActiveNote, setSaving } from "../../../src/store/journal/journalSlice"
import { startCreateNote } from "../../../src/store/journal/thunks"
import { addDoc } from "firebase/firestore/lite"
jest.mock("firebase/firestore/lite")

describe('tests a los thunks del journal', () => {

    const dispatch = jest.fn()
    const getState = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('Deberia crear una nota correctamente', async () => { 

        (addDoc as jest.Mock).mockReturnValue({ id: "123" })

        getState.mockReturnValue({ 
            auth: {
                uid: "ABC123"
            }
        })

        await startCreateNote()( dispatch , getState )

        expect( dispatch ).toHaveBeenCalled()
        
        expect( dispatch ).toHaveBeenCalledTimes(4)

        expect( dispatch ).toHaveBeenCalledWith( setSaving(true) )
        
        expect( dispatch ).toHaveBeenCalledWith( addEmptyNote({
            body: "",
            date: expect.any( Number ),
            imageUrls: [],
            title: "",
            id: "123"
        }))
        
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body: "",
            date: expect.any( Number ),
            imageUrls: [],
            title: "",
            id: expect.any( String )
        }))
        
        expect( dispatch ).toHaveBeenCalledWith( setSaving(false) )

    })

})