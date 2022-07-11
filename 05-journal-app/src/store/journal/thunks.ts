import { addEmptyNote, setActiveNote , setNotes, setSaving } from "./journalSlice"
import { collection, addDoc } from "firebase/firestore/lite"
import { getNotes } from "../../journal/helpers/getNotes"
import { firebaseDB } from "../../firebase/config"
import { AppDispatch, RootState } from "../store"
import { Note } from "../../types"

export const startGetNotes = () => async ( dispatch : AppDispatch ,  getState: () => RootState ) => {

    try
    {

        const state = getState()
        
        const id = state.auth.uid

        if( !id ) return

        const notes = await getNotes(id)

        dispatch(setNotes(notes))

    }
    catch(err)
    {

    }

}

export const startCreateNote = () => async ( dispatch : AppDispatch ,  getState: () => RootState ) => {

    try 
    {

        dispatch(setSaving(true))
        
        const state = getState()
        
        const newNote : Note = {
            title: "",
            body: "",
            date: new Date().getTime(),
        }   

        const id = state.auth.uid
    
        const newCol = collection(firebaseDB , `${id}`, "journal/notes") 

        const newDoc = await addDoc( newCol , newNote );

        newNote.id = newDoc.id

        dispatch(addEmptyNote(newNote))

        dispatch(setActiveNote(newNote))

        dispatch(setSaving(false))

    } 
    catch (error) 
    {
        console.log(error);
    }

}