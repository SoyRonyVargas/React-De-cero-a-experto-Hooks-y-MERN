import { selectIsSaving } from '../../store/journal/journalSlice';
import { startUploadImages } from '../../store/journal/thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Fragment, useRef } from 'react'
import { Button } from "@mui/material"

const UploadNoteButton = () => {
    
    const dispatch = useAppDispatch()

    const isSaving = useAppSelector(selectIsSaving)

    const inputRef = useRef<any>()

    const handleClickWithRef = () => {

        if (inputRef === null) return

        inputRef.current?.click()

    }

    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { target } = event

        if (target.files?.length === 0 || target.files === null) return

        dispatch(startUploadImages(target.files))

    }

    return (
        <Fragment>
            <input
                type="file"
                multiple
                accept='image/*'
                style={{ display: "none" }}
                ref={inputRef}
                onChange={handleInputFileChange}
            />
            <Button disabled={isSaving} onClick={handleClickWithRef}>
                <FileUploadIcon />
            </Button>
        </Fragment>
    )
}

export default UploadNoteButton