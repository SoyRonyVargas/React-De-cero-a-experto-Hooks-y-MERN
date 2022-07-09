import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JournalState } from '../../types'

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
      selectNote: ( state , { payload }: PayloadAction<string> ) => {
        
        const result = state.notes.find( note => note.id === payload ) 
        
        if( result )
        {
            state.actual = result
        }

      }

    },
})

export const {
    selectNote
} = journalSlice.actions

export default journalSlice.reducer