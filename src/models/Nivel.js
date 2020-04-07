const { Model, DataTypes } = require('sequelize');

class Nivel extends Model {
    static init(sequelize){
        super.init({
            descricao: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: "A descricao do nivel não pode ser vazio"
                    },
                    len: {
                        args: [1, 100],
                        msg: "A descricao deve ter entre 1 e 100 caracteres"
                    },
                }
            },
        }, 
        {
            sequelize,
            freezeTableName: true,
            tableName: 'nivel'
        })
    }

}

module.exports = Nivel;