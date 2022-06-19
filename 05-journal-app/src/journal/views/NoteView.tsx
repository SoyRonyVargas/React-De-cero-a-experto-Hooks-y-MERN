import SaveIcon from '@mui/icons-material/Save';
import {
    Grid,
    Typography,
    Button,
    TextField,
    ImageListItem,
    ImageList
} from "@mui/material"

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const NoteView = () => {

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
                        28 De Agosto, 2024
                    </Typography>
                </Grid>
                <Grid item>
                    <Button>
                        <SaveIcon />
                    </Button>
                </Grid>
            </Grid>

            <Grid
                container
                sx={{
                    mt: 1
                }}
            >

                <TextField
                    id="filled-basic"
                    label="Titulo"
                    variant="filled"
                    fullWidth
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
                />

            </Grid>

            {/* <ImageList sx={{ width: "100%", }} cols={4} rowHeight={164}> */}
            <ImageList sx={{ width: "100%", }} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </Grid>
    )
}

export default NoteView