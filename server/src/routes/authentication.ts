import express from 'express'
import jwt from 'jsonwebtoken'

const authRouter = express.Router()

authRouter.post('/', (req, res) => {
    if (req.body.password == '123') {
        const token = jwt.sign({ username: req.body.username }, process.env.TOKEN_SECRET as string)
        res.json({ 'auth-token': token })
    } else {
        res.sendStatus(401)
    }
})

export default authRouter
