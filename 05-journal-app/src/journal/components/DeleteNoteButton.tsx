import { selectIsSaving } from '../../store/journal/journalSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { deleteNote } from '../../store/journal/thunks'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from "@mui/material"
import Swal from 'sweetalert2'

const DeleteNoteButton = () => {

    const dispatch = useAppDispatch()
    
    const isSaving = useAppSelector(selectIsSaving)

    const handleDeleteNote = async () => {

        const response = await Swal.fire({
            title: '¿Quieres eliminar la nota?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar nota',
            cancelButtonText: "Cancelar",
            denyButtonText: "Cancelar"
        })

        if( !response.isConfirmed ) return

        dispatch(deleteNote())

    }

    const Icon = () => (
        <DeleteIcon sx={{
            fontSize: 30,
        }} 
        color="error" />
    )

    return (
        <Button 
            onClick={handleDeleteNote} 
            startIcon={<Icon/>}
            disabled={isSaving}
        >
            ELIMINAR
        </Button>
    )
}

export default DeleteNoteButton