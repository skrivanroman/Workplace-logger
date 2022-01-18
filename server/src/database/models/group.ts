import sequelize from '../connection'
import { DataTypes } from 'sequelize'

const Group = sequelize.define(
    'group',
    {
        idGroup: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        underscored: true,
    }
)

export default Group
