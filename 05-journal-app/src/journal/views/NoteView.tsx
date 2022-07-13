import { selectActualNote, selectImageUrls } from '../../store/journal/journalSlice';
import DeleteNoteButton from '../components/DeleteNoteButton';
import UploadNoteButton from '../components/UploadNoteButton';
import SaveNoteButton from '../components/SaveNoteButton';
import useUpdateNote from '../hooks/useUpdateNote';
import ImageList from '../components/ImageList';
import { useForm } from '../../hooks/useForm';
import { useAppSelector } from '../../hooks';
import {
    Grid,
    Typography,
    TextField,
} from "@mui/material"

const NoteView = () => {

    const imageUrls = useAppSelector(selectImageUrls)
    const note = useAppSelector(selectActualNote)

    if (!note) return <></>

    const {
        formState,
        onInputChange
    } = useForm(note)


    useUpdateNote(formState)

    const genDate = () => {

        let fecha = new Date(formState.date);

        return fecha.toLocaleDateString("es-MX", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    }

    return (
        <Grid container>
            <Grid
                justifyContent="space-between"
                container
                direction="row"
                alignItems={"center"}
            >
                <Grid item>
                    <Typography
                        fontWeight="light"
                        fontSize={39}
                    >
                        {genDate()}
                    </Typography>
                </Grid>
                <Grid item>
                    <DeleteNoteButton/>
                    <UploadNoteButton/>
                    <SaveNoteButton/>
                </Grid>
            </Grid>

            <Grid
                container
                sx={{
                    mt: 1
                }}
            >

                <TextField
                    label="Titulo"
                    variant="filled"
                    fullWidth
                    name="title"
                    value={formState.title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    id="filled-basic"
                    label="¿Que sucedio hoy?"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder='Nota...'
                    minRows={5}
                    sx={{
                        mt: 2
                    }}
                    name="body"
                    value={formState.body}
                    onChange={onInputChange}
                />

            </Grid>

            <ImageList
                imageUrls={imageUrls}
            />

        </Grid>
    )
}

export default NoteView