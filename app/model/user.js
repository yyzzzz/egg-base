'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    email: {type: STRING(255), allowNull: false},// email 地址
  },{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'update_time',
    createdAt: 'create_time',
  });

  User.associate = function(){
    app.model.User.belongsTo(app.model.Company), {foreignKey: 'company_id'};
  }
  return User;
};