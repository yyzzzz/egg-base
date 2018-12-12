'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
    async findAll(limit, offset) {
        const ctx = this.ctx;
        const query = {
            limit, offset,
            include: [
                {
                    model: ctx.model.Company
                }
            ]
        };
        return await ctx.model.User.findAll(query);
    }
}

module.exports = UsersService;
