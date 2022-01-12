import WorkPlace from './workPlace'
import WorkSession from './workSession'

const configRelations = () => {
    WorkSession.belongsTo(WorkPlace)
    WorkPlace.hasOne(WorkSession)
}

export default configRelations
