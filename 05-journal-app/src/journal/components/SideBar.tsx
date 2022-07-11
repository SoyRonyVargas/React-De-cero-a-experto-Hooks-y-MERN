import { selectAuthDisplayName } from '../../store/auth/authSlice'
import { selectNotes } from '../../store/journal/journalSlice'
import { useAppSelector } from '../../hooks'
import { PropsSideBar } from '../types'
import Journaltem from './Journaltem'
import {
    Box,
    Drawer,
    Toolbar,
    Typography,
    Divider,
    List
} from '@mui/material'


export const SideBar = ( { drawerWidth = 240 }: PropsSideBar ) => {
    
    const displayName = useAppSelector(selectAuthDisplayName)
    const notes = useAppSelector(selectNotes)

  return (
    <Box
        component={"nav"}
        sx={{ width: { sm: drawerWidth } , flexShrink: { sm : 0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{ 
                display: { xs : "block" },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                }
            }}
        >

            <Toolbar>
                <Typography variant="h6">
                    { displayName }
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    notes.map( note => 
                        <Journaltem 
                            key={note.id} 
                            {...note}
                        />
                    )
                }
            </List>

        </Drawer>
    </Box>
  )
}
