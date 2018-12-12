'use strict';

const Controller = require('egg').Controller;

class QuestionController extends Controller {
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.question.findOne(ctx.helper.parseInt(ctx.params.id));
  }
}

module.exports = QuestionController;
