import express from 'express'
import morgan from 'morgan'
import authRouter from './routes/authentication'
import historyRouter from './routes/history'
import { getOpenPorts } from './serial/communication'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '500mb', extended: true }))
app.use(express.json({ limit: '500mb' }))

app.use(authRouter)
app.use(historyRouter)

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

process.on('uncaughtException', error => console.error(error))
;(async () => {
    const ports = await getOpenPorts()
    console.log(typeof ports)
    console.log(ports)
})()

app.listen(port, () => console.info(`server started on port: ${port}`))

export default app
