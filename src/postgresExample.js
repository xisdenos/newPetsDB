
import Sequelize from 'sequelize'
const driver = new Sequelize(
    'pets',
    'lucaspinto',
    'minhasenhasecreta',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main() {
    const Pets = driver.define('pets', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            requeired: true
        },
        raca: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: 'TB_PETS',
        freezeTableName: false,
        timestamps: false
    })
    await Pets.sync()

    const result = await Pets.findAll({ raw: true })
    console.log('result ', result)
}