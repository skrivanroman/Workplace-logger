import sequelize from '../connection'
import { DataTypes } from 'sequelize'
import WorkPlace from './workPlace'

const WorkSession = sequelize.define(
    'work_session',
    {
        idWorkSession: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        timestamps: false,
        underscored: true,
    }
)

export default WorkSession
