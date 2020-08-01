// var Sequelize = require('sequelize');
// let models=require('../models');
const Sequelize = require('sequelize');

module.exports = (connection, DataType) => {
    const contact_schema = connection.define('contacts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: Sequelize.STRING,
            
        },
        email:{
            type: Sequelize.STRING,
            
        },
        phone:{
            type: Sequelize.STRING,
            
        },
        message:{
            type: Sequelize.STRING(4096),
        },
        createdAt: {
            type: Sequelize.DATE,
        },
    }, {
        classMethods: {
        },
    freezeTableName: true,
});
contact_schema.associate = (models) => {
    // associations can be defined here

    };

    return contact_schema;
};
