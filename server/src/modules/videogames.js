const { DataTypes } = require('sequelize')

module.exports = (database) => {
    database.define('Videogame', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            }
        },
        released: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 2),
        },
    },
        {
            timestamps: false
        })
}