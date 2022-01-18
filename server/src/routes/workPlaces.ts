import express from 'express'
import Group from '../database/models/group'
import WorkPlace from '../database/models/workPlace'

const workPlacesRouter = express.Router()

workPlacesRouter.get('/all', async (req, res) => {
    const workPlaces = await WorkPlace.findAll({ include: Group })

    res.status(200).json({ workPlaces })
})

export default workPlacesRouter
