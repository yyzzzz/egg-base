'use strict';

const Service = require('egg').Service;

class QuestionService extends Service {
  async findOne(id) {
    const ctx = this.ctx;
    return await ctx.model.Question.findByPk(id);
  }
}

module.exports = QuestionService;
