const { DataTypes } = require('sequelize')
module.exports = (database) => {
    database.define('Platform', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: "No se permiten valores nulos"
                },
                notEmpty: {
                    msg: "No se permiten cadenas vacías"
                }
            }
        }
    }, {
        timestamps: false
    }
    )
}