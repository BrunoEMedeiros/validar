const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: "Nome não pode ser vazio"
                    },
                    len: {
                        args: [1, 100],
                        msg: "Nome deve ter entre 1 e 100 caracteres"
                    },
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: {
                        msg: "Esse campo precisa ser um email"
                    },
                }
            },
            crm: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            cre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            nivel_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
            },
        }, 
        {
            sequelize,
            freezeTableName: true,
            tableName: 'user'
        })
    }

    static associate(models){ 
        this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel'});
    }

}

module.exports = User;