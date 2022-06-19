import { NavBar,  SideBar } from '../components'
import { Box } from "@mui/system"
import { Toolbar } from '@mui/material'
type Props = {
    children: React.ReactNode,
}

const JournalLayout = ( { children } : Props ) => {
  return (
    <Box sx={{ display: "flex" }}>
        
        <SideBar/>

        <NavBar/>

        <Box 
          component={"main"}
          sx={{ flexGrow: 1 , p: 3 }}
        >
          
          <Toolbar/>
          
          { children }

        </Box>

    </Box>
  )
}

export default JournalLayout