import { addEmptyNote, setActiveNote , setImagesToNote, setNotes, setSaving , updateLocalNote , deleteNoteLocal } from "./journalSlice"
import { collection, addDoc , doc, setDoc , deleteDoc } from "firebase/firestore/lite"
import { uploadImage } from "../../journal/helpers/uploadImage"
import { getNotes } from "../../journal/helpers/getNotes"
import { firebaseDB } from "../../firebase/config"
import { AppDispatch, RootState } from "../store"
import { Note } from "../../types"
import Swal from "sweetalert2"

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
            imageUrls: []
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

export const startUpdateNote = () => async ( dispatch : AppDispatch ,  getState: () => RootState ) => {

    try
    {

        dispatch(setSaving(true))
        
        const state = getState()
        
        const id = state.auth.uid

        const id_note = state.journal.actual?.id

        const docToUpdate = doc( firebaseDB , `${id}`, `journal/notes/${id_note}` ) 

        if( !state.journal.actual ) return

        const noteFireStore : Note = {
            ...state.journal.actual
        }

        delete noteFireStore.id

        await setDoc( docToUpdate , noteFireStore , { merge: true } )

        dispatch(updateLocalNote(state.journal.actual))

        dispatch(setSaving(false))

    }
    catch(err)
    {
        throw new Error()
    }

}


export const startUploadImages = ( files: FileList ) => async ( dispatch : AppDispatch ,  getState: () => RootState ) => {

    try
    {

        dispatch(setSaving(true))

        let promises : Promise<string>[] = []

        for( let file of files )
        {
            promises.push(uploadImage(file))
        }

        const responses = await Promise.all(promises)

        console.log(responses);

        dispatch(setImagesToNote(responses))

        dispatch(setSaving(false))

    }
    catch(err)
    {

    }

}

export const deleteNote = () => async ( dispatch : AppDispatch ,  getState: () => RootState ) => {

    try
    {

        dispatch(setSaving(true))
        
        const state = getState()
        
        const id = state.auth.uid

        const id_note = state.journal.actual?.id

        if( !id_note ) return

        const docToDelete = doc( firebaseDB , `${id}`, `journal/notes/${id_note}` ) 

        await deleteDoc( docToDelete )

        dispatch(deleteNoteLocal(id_note))

        dispatch(setSaving(false))

        await Swal.fire(
            'Nota eliminada correctamente',
            '',
            'success'
        )

    }
    catch(err)
    {
        
    }

}