const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    // disable string-based operators, and do not set any aliases (i.e. use the built-in Symbol-based operators
    operatorsAliases: false
});

module.exports = sequelize;