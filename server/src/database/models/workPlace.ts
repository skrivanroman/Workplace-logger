import sequelize from '../connection'
import { DataTypes } from 'sequelize'

const WorkPlace = sequelize.define(
    'work_place',
    {
        idWorkPlace: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        sensorNumber: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
        underscored: true,
    }
)

export default WorkPlace
