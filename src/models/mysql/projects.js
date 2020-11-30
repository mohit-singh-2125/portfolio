// var Sequelize = require('sequelize');
// let models=require('../models');
const Sequelize = require('sequelize');

module.exports = (connection, DataType) => {
    const project_schema = connection.define('projects', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        key:{
            type: Sequelize.STRING,
        },
        name:{
            type: Sequelize.STRING,
        },
        client:{
            type: Sequelize.STRING,
        },
        role:{
            type: Sequelize.STRING(2096),   
        },
        tech:{
            type: Sequelize.STRING(4096),
        },
        description:{
            type: Sequelize.STRING(8096),
        },
        createdAt: {
            type: Sequelize.DATE,
        },
    }, {
        classMethods: {
        },
    freezeTableName: true,
});
project_schema.associate = (models) => {
    // associations can be defined here

    };

    return project_schema;
};
