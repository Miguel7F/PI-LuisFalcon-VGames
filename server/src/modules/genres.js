const { DataTypes } = require('sequelize')
module.exports = (database) => {
    database.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false
    }
    )
}