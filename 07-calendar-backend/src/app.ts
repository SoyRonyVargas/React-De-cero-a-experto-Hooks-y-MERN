import { connectionDatabase } from './database/config';
import AuthRouter from './auth/routes/auth.routes'
import EventRouter from './events/routes/router'
import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()

config()

connectionDatabase()

app.use(cors())

app.use(express.json())

app.use('/api/events',EventRouter)
app.use('/api/auth',AuthRouter)

app.listen( process.env.PORT )