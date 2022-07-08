import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../../../hooks/useForm"

const formValidarions = {
    email: [ ( value : string ) => value.includes("@") , "El correo debe de tener un arroba"],
    password: [ ( value : string ) => value.length >= 6 , "La contraseña debe de tener más de 6 letras"],
    displayName: [ ( value : string ) => value.length >= 1 , "El nombre es obligatorio"]
}

const FormRegister = () => {
    
    const initialState = {
        email: "",
        password: "",
        displayName: ""
    }

    const { 
        onInputChange,
        formState,
        errors 
    } = useForm( initialState , formValidarions )

    return (
        <form>
            {/* <pre>
                {
                    JSON.stringify( errors , null , 3 )
                }
            </pre> */}
            <Grid container>
                <Grid item
                    xs={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        name="displayName"
                        label="Nombre"
                        placeholder="Tu nombre completo"
                        variant="outlined"
                        fullWidth
                        error={!!errors?.displayName}
                        onChange={onInputChange}
                        value={formState.displayName}
                        helperText={errors?.displayName}
                    />
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        name="email"
                        label="Correo"
                        placeholder="correo@gmail.com"
                        variant="outlined"
                        fullWidth
                        error={!!errors?.email}
                        onChange={onInputChange}
                        value={formState.email}
                        helperText={errors?.email}
                    />
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        name="password"
                        label="Contraseña"
                        placeholder="Tu contraseña"
                        variant="outlined"
                        fullWidth
                        error={!!errors?.password}
                        onChange={onInputChange}
                        value={formState.password}
                        helperText={errors?.password}
                    />
                </Grid>

            </Grid>

            <Grid
                container
                spacing={2}
                sx={{ mb: 2 }}
            >

                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Button variant="contained" color="secondary" fullWidth>
                        <Typography sx={{ ml: .5, textTransform: 'capitalize' }}>
                            Crear Cuenta
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
                    <Link component={RouterLink} to="/auth/login">
                        {"¿Ya tienes cuenta? Inicia sesión"}
                    </Link>
                </Grid>
            </Grid>

        </form>
    )
}

export default FormRegister