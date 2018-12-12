'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Exam = app.model.define('exam', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    score: INTEGER,
    operate_id: INTEGER,
  },{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'update_time',
    createdAt: 'create_time',
  });

  return Exam;
};