const RedisService = require('./services/RedisService');

/**
 * @param {object} event
 * @param {object} context
 * @param {Function} callback
 * @returns {Promise<Object|boolean>}
 */
exports.handler = async (event, context, callback) => {
    try {
        // get your parameters, key and open a connection
        await RedisService.get(parameters, key);

        // your code

        return callback(null, {
            statusCode: 200,
            body: 'Success!',
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    } catch (error) {
        return callback(null, {
            statusCode: 500,
            body: `Error occurred! ${JSON.stringify(error)}`,
        });
    }
};
