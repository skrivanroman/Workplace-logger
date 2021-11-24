import express from 'express'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '500mb', extended: true }))
app.use(express.json({ limit: '500mb' }))

app.get('/', (req, res) => {
  res.status(200).send('hello world')
})

process.on('uncaughtException', error => console.error(error))

app.listen(port, () => console.info(`server started on port: ${port}`))
