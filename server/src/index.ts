import express from 'express'
import morgan from 'morgan'
import authRouter from './routes/authentication'
import historyRouter from './routes/history'
import settingsRouter from './routes/settings'
import { getOpenPorts } from './serial/communication'
import path from 'path'
import cors from 'cors'
import configRelations from './database/models/config'

const app = express()
const port = (process.env.PORT && parseInt(process.env.PORT)) || 5000
const reactPath = path.join(__dirname, '..', '..', 'client', 'build')
configRelations()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '500mb', extended: true }))
app.use(express.json({ limit: '500mb' }))

app.use('/login', authRouter)
app.use('/history', historyRouter)
app.use(settingsRouter)

app.use(express.static(reactPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(reactPath, 'index.html'))
})

process.on('uncaughtException', error => console.error(error))

app.listen(port, () => console.info(`server started on port: ${port}`))

export default app
