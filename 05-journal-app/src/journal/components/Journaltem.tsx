import { ListItem, ListItemAvatar, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';

const Journaltem = () => {
    return (
        <ListItemButton>
            <ListItem>
                <ListItemAvatar>
                    <ListItemIcon>
                        <TurnedInNot />
                    </ListItemIcon>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
        </ListItemButton>
    )
}

export default Journaltem