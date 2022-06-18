import { Grid, Typography } from "@mui/material"
import { FC } from 'react'

type Props = {
    children: React.ReactNode,
    title: string
}

const AuthLayout = ({ title , children } : Props ) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: "primary.main"
            }}
        >

            <Grid
                className="box__shadow"
                xs={3}
                item
                sx={{
                    width: { sm: 500 },
                    mx: 2,
                    backgroundColor: "#fff",
                    padding: 3,
                    borderRadius: 2
                }}>

                <Typography
                    variant="h5"
                    sx={{ mb: 1 }}
                >
                    { title }
                </Typography>

                { children }

            </Grid>
        </Grid>
    )
}

export default AuthLayout