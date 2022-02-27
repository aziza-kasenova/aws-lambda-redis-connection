const redis = require('redis');

/**
 * @class RedisService
 */
class RedisService {
    /**
     * @param {{ host: string, password:string }} param0
     * @param {string} key
     * @returns {Promise<string|Array<string>>}
     */
    get ({ host, password }, key) {
        const client = redis.createClient(host);

        client.auth(password);

        return new Promise(resolve => {
            this.client.get(key, (error, data) => { resolve(data); });
        });
    }
}

module.exports = new RedisService();
