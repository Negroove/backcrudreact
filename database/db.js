import Sequelize from "sequelize";

const db = new Sequelize('reactmysql','root','',{
    host:'localhost',
    dialect: 'mysql'
})


export default db