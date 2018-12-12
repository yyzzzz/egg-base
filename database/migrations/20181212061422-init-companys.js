'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const { INTEGER, DATE, STRING } = Sequelize;
   await queryInterface.createTable('company', {
     id: { type: INTEGER, primaryKey: true, autoIncrement: true },
     name: STRING(30),
     address: STRING(255),
     created_at: DATE,
     updated_at: DATE,
   });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.dropTable('company');

  }
};
