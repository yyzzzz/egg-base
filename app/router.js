'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/users', controller.users);
  router.resources('company', '/companys', controller.company);
  router.resources('score', '/scores', controller.score);
  router.resources('question', '/questions', controller.question);

};
