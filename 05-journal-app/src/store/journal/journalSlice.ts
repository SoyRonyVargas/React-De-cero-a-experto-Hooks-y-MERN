import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JournalState, Note } from '../../types'
import { RootState } from '../store'

const initialState : JournalState = {
    messageSaved: "",
    isSaving: false,
    actual: null,
    notes: []
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
      setSaving: ( state , { payload }: PayloadAction<boolean> ) => {
        state.isSaving = payload
      },
      addEmptyNote: ( state , { payload }: PayloadAction<Note>  ) => {
        state.notes.push(payload)
      },
      setActiveNote: ( state , { payload }: PayloadAction<Note>  ) => {
        state.actual = payload
      },
      setNotes: ( state , { payload }: PayloadAction<Note[]>  ) => {
        state.notes = payload
      },
      updateLocalNote: ( state , { payload }: PayloadAction<Note>  ) => {
        state.notes = state.notes.map( note => {

          debugger

          if( note.id === payload.id ) return {...payload};

          return note;
          
        })
      },
      setImagesToNote: ( state , { payload }: PayloadAction<string[]>  ) => {
        
        if( state.actual !== null )
        {
          state.actual.imageUrls = [
            ...state.actual?.imageUrls,
            ...payload
          ]
        }

      },
      deleteNoteLocal:  ( state , { payload }: PayloadAction<string>  ) => {
        state.notes = state.notes.filter( note => note.id !== payload )
        state.actual = null
      },
      cleanLogout: ( state ) => {
        state.notes = []
        state.actual = null
        state.messageSaved = ""
        state.isSaving = false
      }
    },
})

export const {
  setImagesToNote,
  updateLocalNote,
  deleteNoteLocal,
  setActiveNote,
  addEmptyNote,
  cleanLogout,
  setSaving,
  setNotes
} = journalSlice.actions

export const selectIsSaving = ( state : RootState ) => state.journal.isSaving;

export const selectIsNoteSelected = ( state : RootState ) => state.journal.actual !== null

export const selectNotes = ( state : RootState ) => state.journal.notes

export const selectActualNote = ( state : RootState ) => state.journal.actual

export const selectImageUrls = ( state : RootState ) => state.journal.actual?.imageUrls || []

export default journalSlice.reducer