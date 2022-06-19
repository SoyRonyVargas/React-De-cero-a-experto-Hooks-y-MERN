import { Typography } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import NoteView from "../views/NoteView"
import NothingSelectedView from "../views/NothingSelectedView"

const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView/> */}
      <NoteView/>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis sunt in quas tenetur dicta aperiam voluptatum corrupti quibusdam, eligendi fuga neque, provident facilis! Amet libero ipsa obcaecati sint eaque.
      </Typography> */}
    </JournalLayout>
  )
}

export default JournalPage