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
      }
    },
})

export const {
  setActiveNote,
  addEmptyNote,
  setSaving,
  setNotes
} = journalSlice.actions

export const selectIsSaving = ( state : RootState ) => state.journal.isSaving;

export const selectIsNoteSelected = ( state : RootState ) => state.journal.actual !== null

export const selectNotes = ( state : RootState ) => state.journal.notes

export default journalSlice.reducer