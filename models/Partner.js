const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Partner = sequelize.define('Partner', {
    partnerID: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    partnerName: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'partners',
        createdAt: false,
        updatedAt: false
    }
);

module.exports = Partner
