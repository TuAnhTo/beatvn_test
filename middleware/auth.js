const _ = require('lodash')

module.exports.auth = async function auth(req, res, next){
    try{
        let token       = req.headers.authorization
        token           = token.slice(7)
        let TOKEN       = process.env.TOKEN

        if (_.isEmpty(token)) {
            return await res.status(400).send('No token')
        } else if (TOKEN === token) {
            next()
        }
    } catch (e){
        console.log(e, 'getDataIndex error')
    }
}