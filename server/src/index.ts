import express from 'express'
import morgan from 'morgan'
import authRouter from './routes/authentication'
import historyRouter from './routes/history'
import { getOpenPorts } from './serial/communication'
import path from 'path'
import cors from 'cors'

const app = express()
const port = (process.env.PORT && parseInt(process.env.PORT)) || 5000
const reactPath = path.join(__dirname, '..', '..', 'client', 'build')

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '500mb', extended: true }))
app.use(express.json({ limit: '500mb' }))

app.use(authRouter)
app.use(historyRouter)

app.use(express.static(reactPath))

app.get('/echo', (req, res) => {
    const data = {
        name: 'jan',
        age: 15,
        city: 'LA',
    }
    res.send(JSON.stringify(data))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(reactPath, 'index.html'))
})

process.on('uncaughtException', error => console.error(error))
;(async () => {
    const ports = await getOpenPorts()
    console.log(typeof ports)
    console.log(ports)
})()

app.listen(port, () => console.info(`server started on port: ${port}`))

export default app
