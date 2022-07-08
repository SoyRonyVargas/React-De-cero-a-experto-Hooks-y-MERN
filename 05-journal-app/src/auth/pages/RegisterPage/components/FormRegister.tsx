import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../../../hooks/useForm"
import { useAppDispatch } from "../../../../hooks"
import { 
    startCreatingUserWithEmailAndPassword 
} from "../../../../store/auth/thunks"

const formValidators = {
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
        errors ,
        submited,
        handleSubmitForm,
        isFormValid
    } = useForm( initialState , formValidators )

    const dispatch = useAppDispatch()

    const handleSubmit = () => {

        handleSubmitForm()

        if( !isFormValid ) return;

        dispatch(startCreatingUserWithEmailAndPassword(formState))

    }

    return (
        <form>
            {/* <pre>
                {
                    JSON.stringify( errors , null , 3 )
                }
            </pre> */}
            <h1> Valid { isFormValid ? " si" : "no" } </h1>
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
                        error={!!errors?.displayName && submited}
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
                        error={!!errors?.email && submited}
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
                        error={!!errors?.password && submited}
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
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth
                        onClick={handleSubmit}
                    >
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