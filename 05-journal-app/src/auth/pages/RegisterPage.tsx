import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <img src="/images/logo.svg" className="logo__standard" alt="" />

      <form>
        <Grid container>
          <Grid item
            xs={12}
            sx={{
              mt: 2
            }}
          >
            <TextField
              id="outlined-basic"
              label="Nombre"
              placeholder="Tu nombre completo"
              variant="outlined"
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
              id="outlined-basic"
              label="Correo"
              placeholder="correo@gmail.com"
              variant="outlined"
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
              id="outlined-basic"
              label="Contraseña"
              placeholder="Tu contraseña"
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
    </AuthLayout>
  )
}

export default RegisterPage