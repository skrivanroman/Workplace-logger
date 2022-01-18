import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

type Middleware = (req: Request, res: Response, next: NextFunction) => void

const authenticate: Middleware = (req, res, next) => {
    if (!req.headers['auth-token']) {
        res.sendStatus(401)
        return
    }

    jwt.verify(req.headers['auth-token'] as string, (err, username) => {
        if (err) {
            res.sendStatus(403)
            return
        }

        req.body.username = username
        next()
    })
}

export default authenticate
