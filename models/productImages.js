const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const productImages = sequelize.define('productImages', {
    productId:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ImagesId:{
        type: DataTypes.INTEGER,
    }
    ,
    url:{
        type: DataTypes.STRING,
    }

},{});

module.exports = productImages;