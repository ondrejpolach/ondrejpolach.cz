'use strict';
const axios = require('axios');
/**
 * A set of functions called "actions" for `ci`
 */

module.exports = {
    invokeGithubWebhook: async (ctx, next) => {
        try {
            const { data } = await axios.post(`https://api.github.com/repos/${process.env.GITHUB_WEBHOOK_URL}`, { ref: 'main' }, {
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                    Authorization: `Bearer ${process.env.GITHUB_KEY}`
                }
            });
            
            ctx.status = 200;
            return data;
        } catch (err) {
            ctx.status = 500;
            return { error: err.message };
        }
    }
};
