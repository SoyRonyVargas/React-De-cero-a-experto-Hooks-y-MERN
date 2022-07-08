import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { checkGoogleAuth } from "../../../../store/auth/thunks"
import { selectStatus } from "../../../../store/auth/authSlice"
import { Link as RouterLink } from 'react-router-dom'
import { useAppDispatch } from "../../../../hooks"
import { Google } from "@mui/icons-material"
import { useSelector } from 'react-redux'

const FormLogin = () => {

    const dispatch = useAppDispatch()

    const isChecking = useSelector(selectStatus)
    
    const handleGoogleSignIn = () => {

        dispatch(checkGoogleAuth())        

    }

    return (
        <form className="w-100">
            
            <img 
                src="/images/logo.svg" 
                className="logo__standard" 
                alt="Logo" 
            />

            <Grid container>
                <Grid item
                    lg={12}
                    xs={12}
                    md={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        placeholder="correo@gmail.com"
                        disabled={isChecking}
                        variant="outlined"
                        label="Correo"
                        fullWidth
                    />
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        placeholder="Tu contraseña"
                        disabled={isChecking}
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

            </Grid>

            <Grid
                container
                spacing={2}
                sx={{ mb: 2 }}
            >

                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                    <Button 
                        disabled={isChecking}
                        variant="contained" 
                        color="secondary" 
                        fullWidth
                    >
                        <Typography sx={{ ml: .5, textTransform: 'capitalize' }}>
                            Iniciar Sesión
                        </Typography>
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                    <Button 
                        onClick={handleGoogleSignIn} 
                        disabled={isChecking}
                        variant="contained" 
                        color="primary" 
                        fullWidth
                    >
                        <Google color={"secondary"} />
                        <Typography sx={{ ml: .5, textTransform: 'capitalize' }}>
                            Google
                        </Typography>
                    </Button>
                </Grid>

            </Grid>

            <Grid container sx={{ mt: 3 }}>
                <Grid item xs>
                    <Link component={RouterLink} to="/">

                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to="/auth/register">
                        {"¿No tienes cuenta? Registrate"}
                    </Link>
                </Grid>
            </Grid>

        </form>
    )
}

export default FormLogin