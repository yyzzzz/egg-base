'use strict';

const Controller = require('egg').Controller;

class ScoreController extends Controller {
  async create() {
    const ctx = this.ctx;
    const questionArr = ctx.request.body;
    const {score, rate} = await ctx.service.score.createScore(questionArr);
    ctx.status = 201;
    ctx.body = {
        score: score,
        rate: rate
    };
  }
}

module.exports = ScoreController;
