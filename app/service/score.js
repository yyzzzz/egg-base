'use strict';

const Service = require('egg').Service;

class ScoreService extends Service {
    async createScore(questionArr) {
        const ctx = this.ctx;
        let score = 0;
        for (let i = 0; i < questionArr.length; i++) {
            const questionObj = await ctx.service.question.findOne(questionArr[i].id);
            if (questionArr[i].selected === questionObj.answer) {
                score += questionObj.value;
            }
        }
        const scoreObj = await ctx.model.Score.create({ score });
        const lteNum = await ctx.model.Score.count({
            where: {
                score: {
                    $lt: score
                }
            }
        });

        const count = await ctx.model.Score.count();
        const rate = Math.round(lteNum / count * 100) + '%';
        return { score, rate };
    }
}

module.exports = ScoreService;
