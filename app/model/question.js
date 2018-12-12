'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Question = app.model.define('question', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    question_desc: STRING(255),
    question_type: INTEGER, //0 判断题 1 选择题
    select_a: STRING, //选项
    select_b: STRING,
    select_c: STRING,
    select_d: STRING,
    value: INTEGER, //分值
    answer: STRING, // 参考答案
  },{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'update_time',
    createdAt: 'create_time',
  });

  return Question;
};