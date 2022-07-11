import { collection,getDocs , query } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { Note } from "../../types"


export const getNotes = async (id: string) => {

    const selectCol = collection(firebaseDB, `${id}`, "journal/notes")

    const newQuery = query(selectCol)

    const result = await getDocs(newQuery)

    let notes : Note[] = []

    result.forEach( (note ) => {
        
        const rest : any = note.data()

        let noteFirestore : Note = {
            ...rest,
            id: note.id
        }

        notes.push(noteFirestore)

    })

    return notes

}

