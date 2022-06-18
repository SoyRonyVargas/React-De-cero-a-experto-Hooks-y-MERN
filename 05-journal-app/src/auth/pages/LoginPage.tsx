  import { Button, Grid, TextField, Typography, Link } from "@mui/material"
  import { Link as RouterLink } from 'react-router-dom'
  import AuthLayout from "../layout/AuthLayout"
  import Paper from '@mui/material/Paper';
  import Box from '@mui/material/Box';
  import { Google } from "@mui/icons-material";

  const LoginPage = () => {
    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#1A1928"
          }}
        >
          <img src="/images/login3.png" className="logo__standard" alt="" />
        </Grid>
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
              // p: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <form className="w-100">
              <img src="/images/logo.svg" className="logo__standard" alt="" />
              <Grid container>
                {/* <Grid item
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
                </Grid> */}
                <Grid item
                  lg={12}
                  xs={12}
                  md={12}
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

                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <Button variant="contained" color="secondary" fullWidth>
                    <Typography sx={{ ml: .5, textTransform: 'capitalize' }}>
                      Crear Cuenta
                    </Typography>
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    {/* <Google color={"primary"} /> */}
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
                    {"¿Ya tienes cuenta? Inicia sesión"}
                  </Link>
                </Grid>
              </Grid>

            </form>
          </Box>
        </Grid>
      </Grid>
    )
  }

  export default LoginPage