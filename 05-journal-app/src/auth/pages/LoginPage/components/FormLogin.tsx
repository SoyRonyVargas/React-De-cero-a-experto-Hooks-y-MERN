import { Button, Grid, TextField, Typography, Link , Alert } from "@mui/material"
import { selectStatus , selectError } from "../../../../store/auth/authSlice"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../../../hooks/useForm" 
import { useAppDispatch } from "../../../../hooks"
import { Google } from "@mui/icons-material"
import { useSelector } from 'react-redux'
import { 
    checkAuthWithEmailAndPassword, 
    checkGoogleAuth 
} from "../../../../store/auth/thunks"

const formValidators = {
    email: [ ( value : string ) => value.includes("@") && value.trim().length > 0 , "Ingresa un correo electronico valido"],
    password: [ ( value : string ) => value.length > 0 , "Ingresa la contraseña"],
}

const initialState = {
    email: "",
    password: "",
}

const FormLogin = () => {

    const dispatch = useAppDispatch()

    const isChecking = useSelector(selectStatus)
    const errorLogin = useSelector(selectError)

    const handleGoogleSignIn = () => {

        dispatch(checkGoogleAuth())        

    }

    const { 
        onInputChange,
        formState,
        errors ,
        submited,
        handleSubmitForm,
        isFormValid
    } = useForm( initialState , formValidators )

    const handleSubmit = () => {

        handleSubmitForm()

        if( !isFormValid ) return;

        dispatch(checkAuthWithEmailAndPassword({
            ...formState,
            displayName: ""
        }))

    }

    return (
        <form className="w-100 animate__animated animate__fadeIn animate__faster">
            
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
                        name="email"
                        label="Correo"
                        fullWidth
                        error={!!errors?.email && submited}
                        onChange={onInputChange}
                        value={formState.email}
                        helperText={(!!errors?.email && submited) && errors?.email }
                    />
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        mt: 2
                    }}
                >
                    <TextField
                        type="password"
                        placeholder="Tu contraseña"
                        disabled={isChecking}
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        name="password"
                        error={!!errors?.password && submited}
                        onChange={onInputChange}
                        value={formState.password}
                        helperText={(!!errors?.password && submited) && errors?.password }
                    />
                </Grid>

            </Grid>

            {
                errorLogin &&
                <Alert sx={{ mt: 2 }} severity="error">
                    { errorLogin }
                </Alert>
            }

            <Grid
                container
                spacing={2}
                sx={{ mb: 2 }}
            >

                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                    <Button 
                        onClick={handleSubmit}
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