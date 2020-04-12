'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
          
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
     
      },
      crm: {
        type: Sequelize.STRING
      },
      cre: {
        type: Sequelize.STRING
      },
      nivel_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model : 'nivel', key: 'id' },
        defaultValue: 1
      },
      status: {
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};