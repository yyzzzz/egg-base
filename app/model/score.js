'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Score = app.model.define('score', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    score: INTEGER,
    operate_id: INTEGER,
    use_time: DATE,
  },{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'update_time',
    createdAt: 'create_time',
  });

  return Score;
};