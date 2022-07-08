import ItemRight from "./components/ItemRight"
import ItemLeft from "./components/ItemLeft"
import { Grid } from "@mui/material"

const LoginPage = () => (
  <Grid container component="main" sx={{ height: '100vh' }}>
    <ItemLeft/>
    <ItemRight/>
  </Grid>
)

export default LoginPage