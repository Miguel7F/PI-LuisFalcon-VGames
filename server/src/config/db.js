require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const { Sequelize } = require('sequelize')
const videoGameModel = require('../modules/videogames')
const genresModel = require('../modules/genres')

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false
})

videoGameModel(database);
genresModel(database);

const { Videogame, Genre } = database.models


Videogame.belongsToMany(Genre, { through: 'genreXgame', timestamps: false });
Genre.belongsToMany(Videogame, { through: 'genreXgame'});

module.exports = {
    database,
    ...database.models
}