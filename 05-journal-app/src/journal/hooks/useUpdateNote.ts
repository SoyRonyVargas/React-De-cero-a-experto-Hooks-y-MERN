import { setActiveNote } from "../../store/journal/journalSlice"
import { useAppDispatch } from "../../hooks"
import { Note } from "../../types"
import { useEffect } from "react"

const useUpdateNote = ( state : Note ) => {
  
    const dispatch = useAppDispatch()

    useEffect( () => {

        dispatch(setActiveNote(state))

    } , [state])

}

export default useUpdateNote