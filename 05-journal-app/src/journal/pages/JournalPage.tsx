import { selectIsNoteSelected } from "../../store/journal/journalSlice"
import NothingSelectedView from "../views/NothingSelectedView"
import JournalLayout from "../layout/JournalLayout"
import AddButton from "../components/AddButton"
import { useAppSelector } from "../../hooks"
import NoteView from "../views/NoteView"

const JournalPage = () => {

  const isNoteSelected = useAppSelector(selectIsNoteSelected)

  return (
    <JournalLayout>
      
      {
        isNoteSelected
        ?
        <NoteView/>
        :
        <NothingSelectedView/>
      }
      
      <AddButton/>
    
    </JournalLayout>
  )

}

export default JournalPage