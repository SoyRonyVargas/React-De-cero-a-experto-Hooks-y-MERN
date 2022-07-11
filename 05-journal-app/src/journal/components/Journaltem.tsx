import { ListItem, ListItemAvatar, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import { selectNotes, setActiveNote } from '../../store/journal/journalSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { TurnedInNot } from '@mui/icons-material'
import { useMemo , memo } from 'react'
import { Note } from '../../types'

const Journaltem = ( { title , id } : Note ) => {

    const dispatch = useAppDispatch()
    
    const notes = useAppSelector( selectNotes )

    const max = 12

    const titleMemo = useMemo( () => {

        if( title.length > max ) return title.substring( 0 , max ).concat("...")

        return title

    } , [ title ])

    const handleSelectNote = () => {

        const selectedNote = notes.find( note => note.id === id )

        if( !selectedNote ) return

        dispatch(setActiveNote(selectedNote))

    }

    return (
        <ListItemButton onClick={handleSelectNote}>
            <ListItem>
                <ListItemAvatar>
                    <ListItemIcon>
                        <TurnedInNot />
                    </ListItemIcon>
                </ListItemAvatar>
                <ListItemText primary={titleMemo} />
            </ListItem>
        </ListItemButton>
    )
}

export default memo(Journaltem)