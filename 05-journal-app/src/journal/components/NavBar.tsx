import { LogoutOutlined } from '@mui/icons-material';
import { PropsSideBar } from '../types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

export const NavBar = ( props: PropsSideBar ) => {

  const { drawerWidth = 240 } = props

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc( 100% - ${drawerWidth}px )` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
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
        
        <IconButton color="inherit">
          <LogoutOutlined></LogoutOutlined>
        </IconButton>

      </Toolbar>
    </AppBar>
  )
}
