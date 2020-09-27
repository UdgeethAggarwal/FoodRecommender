const Sequelize = require('sequelize')
const observedDataModel = require('./app/models/observedDataModel')

const sequelize = new Sequelize('testdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const ObservedData = observedDataModel(sequelize, Sequelize)


sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  ObservedData
}