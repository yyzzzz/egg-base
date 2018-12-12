'use strict';

const Service = require('egg').Service;

class CompanyService extends Service {
    async findAll(limit, offset) {
        const ctx = this.ctx;
        const query = {
            limit, offset,
            include: [
                {
                    model: ctx.model.User,
                    as: 'users',
                }
            ]
        };
        return await ctx.model.Company.findAll(query);
    }
}

module.exports = CompanyService;
