import sequelize from '../connection'
import { DataTypes } from 'sequelize'

const User = sequelize.define(
    'user',
    {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordSalt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
    },
    {
        timestamps: false,
        underscored: true,
    }
)

export default User
