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
                    Mario Palacios
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    [ 1 , 2 , 3 , 4 ].map( journal => 
                        <Journaltem key={journal} />
                    )
                }
            </List>

        </Drawer>
    </Box>
  )
}
