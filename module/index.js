const _ = require('lodash')
const {insertData, getDataIndex} = require("./helper");

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
module.exports.insertData = async function getIpAddr(req, res, next) {
    try {
        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        let data = {
            ip      : ipAddr,
            data    : req.body
        };
        await insertData(data)
        return await res.status(200).send(data, ' ', ipAddr)
    } catch (e) {
        console.log(e)
    }
};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
module.exports.getData = async function getData(req, res, next) {
    try {
        let list = await getDataIndex()
        return await res.status(200).send(list)
    } catch (e) {
        console.log(e)
    }
};