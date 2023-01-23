const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../database');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,

    }
},
{
    sequelize: sequelizeConnection,
    modelName: "Post",
    schema: process.env.DB_DATABASE
});

sequelizeConnection.sync();

module.exports = Post;