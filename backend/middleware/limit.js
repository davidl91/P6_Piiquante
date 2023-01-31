const ratelimit = require('express-rate-limit');

const limiter = ratelimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit 5 requests
})

module.exports = { limiter };