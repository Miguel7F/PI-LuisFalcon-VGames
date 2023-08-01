require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const { Sequelize } = require('sequelize')
const videoGameModel = require('../modules/videogames')
const genresModel = require('../modules/genres')
const platformsModel=require('../modules/platforms')

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false
})

videoGameModel(database);
genresModel(database);
platformsModel(database);

const { Videogame, Genre, Platform } = database.models


Videogame.belongsToMany(Genre, { through: 'genreXgame', timestamps: false });
Genre.belongsToMany(Videogame, { through: 'genreXgame'});

Videogame.belongsToMany(Platform, { through: 'platformXgame', timestamps: false });
Platform.belongsToMany(Videogame, { through: 'platformXgame'});

module.exports = {
    database,
    ...database.models
}