import { selectIsSaving } from '../../store/journal/journalSlice'
import { useAppDispatch , useAppSelector } from '../../hooks'
import { startCreateNote } from '../../store/journal/thunks'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'

const AddButton = () => {

    const dispatch = useAppDispatch()

    const handleCreateNote = () => dispatch(startCreateNote())

    const isSaving = useAppSelector(selectIsSaving)

    return (
        <Fab disabled={isSaving} onClick={handleCreateNote} sx={{
            position: "fixed",
            bottom: 50,
            right: 50
        }} color="secondary" aria-label="add">
            <AddIcon />
        </Fab>
    )
}

export default AddButton