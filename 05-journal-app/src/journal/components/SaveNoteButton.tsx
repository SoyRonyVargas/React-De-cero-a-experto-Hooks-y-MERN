import { selectIsSaving } from '../../store/journal/journalSlice';
import { startUpdateNote } from '../../store/journal/thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from "@mui/material"

const SaveNoteButton = () => {

    const dispatch = useAppDispatch()

    const isSaving = useAppSelector(selectIsSaving)

    const handleUpdateNote = () => dispatch(startUpdateNote())

    return (
        <Button 
            disabled={isSaving}
            startIcon={<SaveIcon />} 
            onClick={handleUpdateNote}
        >
            GUARDAR
        </Button>
    )
}

export default SaveNoteButton