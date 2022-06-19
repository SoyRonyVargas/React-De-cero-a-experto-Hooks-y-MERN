import { 
    Grid, 
    Typography,
    Box
} from "@mui/material"

const NothingSelectedView = () => {
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems={"center"}
        justifyContent="center"
        sx={{
            backgroundColor: "primary.main",
            minHeight: 'calc( 100vh - 120px )',
            borderRadius: 2
        }}
    >
        
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            
            <img className="logo__no_selected__logo" src="/images/no_selected.png" alt="" />

            <Typography 
                variant="h4"
                sx={{
                    ml: 2,
                    color: "#FFF"
                }}
            >
                Selecciona o crea una entrada
            </Typography>

        </Box>
        
    </Grid>
  )
}

export default NothingSelectedView