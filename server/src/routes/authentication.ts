import express from 'express'

const authRouter = express.Router()

authRouter.post('/', (req, res) => {
    if (req.body.password == '123') {
        res.send(JSON.stringify({ username: req.body.username, token: 'ok' }))
    } else {
        res.send(JSON.stringify({ username: '', token: '' }))
    }
})

export default authRouter
