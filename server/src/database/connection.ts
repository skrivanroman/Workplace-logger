import { Sequelize } from 'sequelize'
import env from 'dotenv'

env.config()

const sequelize = new Sequelize(
    process.env.DATABASE as string,
    process.env.DBUSER as string,
    process.env.DBPASWD as string,
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

export default sequelize
