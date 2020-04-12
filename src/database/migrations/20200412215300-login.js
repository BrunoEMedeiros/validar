'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('login', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
          
      },
      login: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senha: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      usr_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'user', key: 'id' },
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
    return queryInterface.dropTable('login');
  }
};
