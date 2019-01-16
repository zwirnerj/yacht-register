const sequelize = require('../util/database');
const Yacht = require('./yacht');
const User = require('./user');


//Assosiations
Yacht.belongsTo(User, {
    constraints: true
});
User.hasMany(Yacht);

// init DB and start server
sequelize
    .sync({
        alter: true,
        force: false
    })
    .then(result => {
        console.log(`Sequelize started!`);
    })
    .catch(err => {
        console.log(err);
    });