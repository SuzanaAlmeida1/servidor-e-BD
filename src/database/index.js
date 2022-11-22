const Sequelize = require('Sequelize')

const DB_NAME = 'loja'
const DB_USER = 'root'
const DB_PASS = ''
const DB_CONFIG = {
  dialect: 'mysql',
  host: '',
  port: 4000
}

//objeto para guardar a conexão no banco de dados
let db = {}

//conexão com o banco

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
  console.error('erro ao tentar conectar com o banco de dados')
}

//teste verificar a conexão com o Banco de dados atravez do hasconection e com as querys

async function hasConection() {
  try {
    await db.authenticate()
    console.log('Banco de dados conectado! :) ')
  } catch (error) {
    console.error('erro ao se conectar com o banco de dados! :( ')
  }
}

Object.assign(db, {
  hasConection
})

module.exports = db
