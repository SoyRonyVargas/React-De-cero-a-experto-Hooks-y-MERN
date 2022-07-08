import Paper from '@mui/material/Paper'
import { Grid } from "@mui/material"
import FormLogin from "./FormLogin"
import Box from '@mui/material/Box'

const ItemRight = () => {

    return (
        <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: "#FFFBF9" }}
        >
            <Box
                sx={{
                    width: '75%',
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <FormLogin/>
            </Box>
        </Grid>
    )
}

export default ItemRight