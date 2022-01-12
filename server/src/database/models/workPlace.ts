import sequelize from '../connection'
import { DataTypes } from 'sequelize'
import WorkSession from './workSession'

const WorkPlace = sequelize.define(
    'work_place',
    {
        idWorkPlace: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        underscored: true,
    }
)

export default WorkPlace
