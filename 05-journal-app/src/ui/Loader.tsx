import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const Loader = () => (
    <Backdrop
        sx={{ 
            color: '#5C61F2', 
            zIndex: (theme) => theme.zIndex.drawer + 1,  
            minHeight: '100vh', 
            backgroundColor: 'primary.main', 
            padding: 4
        }}
        open={true}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
)

export default Loader