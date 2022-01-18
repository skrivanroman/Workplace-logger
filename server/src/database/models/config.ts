import Group from './group'
import WorkPlace from './workPlace'
import WorkSession from './workSession'

const configRelations = () => {
    Group.hasMany(WorkPlace)
    WorkPlace.belongsTo(Group)

    WorkPlace.hasOne(WorkSession)
    WorkSession.belongsTo(WorkPlace)
}

export default configRelations
