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
    await queryInterface.createTable('question', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      question_desc: STRING(255),
      question_type: INTEGER, //0 判断题 1 选择题
      select_a: STRING, //选项
      select_b: STRING,
      select_c: STRING,
      select_d: STRING,
      value: INTEGER, //分值
      answer: STRING, // 参考答案
      create_time: DATE,
      update_time: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('question');

  }
};
