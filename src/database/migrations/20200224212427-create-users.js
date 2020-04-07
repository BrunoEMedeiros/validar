'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
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
    return queryInterface.dropTable('users');
  }
};
