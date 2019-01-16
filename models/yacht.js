const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Yacht = sequelize.define('yacht', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    currentName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
    },
    build: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Yacht;