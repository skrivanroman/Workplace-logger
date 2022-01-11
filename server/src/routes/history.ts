import express from 'express'

const historyRouter = express.Router()

historyRouter.get('/now', (req, res) => {
    const places = {
        places: [
            {
                name: 'zdk',
                active: true,
                x: 0,
                y: 0,
            },
            {
                name: 'pgh',
                active: false,
                x: 0,
                y: 0,
            },
            {
                name: 'qij',
                active: true,
                x: 0,
                y: 0,
            },
            {
                name: 'odx',
                active: false,
                x: 0,
                y: 0,
            },
        ],
    }
    res.send(JSON.stringify(places))
})

export default historyRouter
