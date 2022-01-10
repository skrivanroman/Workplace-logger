import express from 'express'

const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
    res.send(JSON.stringify(req.body.username))
})

export default authRouter
