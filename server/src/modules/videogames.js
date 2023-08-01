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
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "No se permiten valores nulos"
                },
                notEmpty: {
                    msg: "No se permiten cadenas vacías"
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "No se permiten valores nulos"
                },
                notEmpty: {
                    msg: "No se permiten cadenas vacías"
                }
            }
        },
        // platforms: {
        //     type: DataTypes.ARRAY(DataTypes.JSON),
        //     allowNull: false,
        //     validate: {
        //         notNull: {
        //             msg: "No se permiten valores nulos"
        //         }
        //     }
        // },
        background_image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: {
                    args: true,
                    msg: 'El formato de URL ingresado no es válido',
                },
            },
        },
        released: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "No se permiten valores nulos"
                }
            }
        },
        rating: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "No se permiten valores nulos"
                }
            }
        },
    },
        {
            timestamps: false
        })
}