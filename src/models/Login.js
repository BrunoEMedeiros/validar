const { Model, DataTypes } = require('sequelize');

class Login extends Model {
    static init(sequelize){
        super.init({
            login: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: "Login não pode ser vazio"
                    },
                    len: {
                        args: [5, 100],
                        msg: "Login deve ter entre 5 e 100 caracteres"
                    },
                }
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: "Senha não pode ser vazia"
                    },
                }
            },
            nivel_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        }, 
        {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'usr_id', as: 'users'});
        this.belongsTo(models.Nivel, { foreignKey: 'nivel_id', as: 'nivel'});
    }

}

module.exports = Login;