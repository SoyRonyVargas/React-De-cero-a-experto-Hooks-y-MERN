import { startLogout } from "../../store/auth/thunks"
import { LogoutOutlined } from '@mui/icons-material'
import { useAppDispatch } from '../../hooks'
import { PropsSideBar } from '../types'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';

export const NavBar = ( props: PropsSideBar ) => {

  const dispatch = useAppDispatch()

  const { drawerWidth = 240 } = props

  const handleLogout = () => dispatch(startLogout())

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc( 100% - ${drawerWidth}px )` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            display: "flex",
            alignItems: "center"
          }}
        >
          <img src="/images/navbar2.svg" className='navbar__logo' alt="" />
        </Typography>
        
        <IconButton onClick={handleLogout} color="inherit">
          <LogoutOutlined></LogoutOutlined>
        </IconButton>

      </Toolbar>
    </AppBar>
  )
}
