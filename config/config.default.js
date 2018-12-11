'use strict';
const Sequelize = require('sequelize');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544534001596_2600';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'eggjs-example',
    host: '127.0.0.1',
    port: 3306,
    username: "root",
    password: "1230",
    operatorsAliases: false,
    timezone: '+08:00'
  };

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 白名单
    // domainWhiteList: ['http://localhost:8080'],
  }

  // 允许规则
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
