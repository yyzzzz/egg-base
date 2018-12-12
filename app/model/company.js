'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Company = app.model.define('company', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    address: STRING(255),
  },{
    freezeTableName: true,
    timestamps: true,
  });

  Company.associate = function(){
    app.model.Company.hasMany(app.model.User, {as: 'users'});
  }
  return Company;
};