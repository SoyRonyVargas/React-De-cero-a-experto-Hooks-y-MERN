import { ImageListItem, ImageList as ImageListMUI , Box } from "@mui/material"
import { selectIsSaving } from "../../store/journal/journalSlice";
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from "../../hooks"
import { Fragment } from "react";

interface Props {
    imageUrls: string[]
}

const ImageList = ({ imageUrls }: Props) => {

    const isSaving = useAppSelector(selectIsSaving)

    return (
        <Fragment>
            {
                isSaving
                    ?
                    <Box
                        sx={{
                            width: "100%",
                            padding: 5,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <CircularProgress/>
                    </Box>
                    :
                    <ImageListMUI sx={{ width: "100%", }} cols={4}>
                        {imageUrls.map((image) => (
                            <ImageListItem key={image}>
                                <img
                                    src={`${image}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={"Imagen de pruebas"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageListMUI>
            }
        </Fragment>
    )
}

export default ImageList