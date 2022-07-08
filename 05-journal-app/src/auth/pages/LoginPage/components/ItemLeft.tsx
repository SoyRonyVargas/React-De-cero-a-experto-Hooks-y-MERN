import { Grid } from "@mui/material"

const ItemLeft = () => {
  return (
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
  )
}

export default ItemLeft