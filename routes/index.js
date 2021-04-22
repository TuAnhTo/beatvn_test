const express = require('express');
const {auth} = require("../middleware/auth");
const {insertData, getData} = require("../module");
const router = express.Router();

/* GET home page. */
router.post('/echo',auth, async function (req, res, next) {
    try {
        return await insertData(req, res, next)
    } catch (e) {
        console.log(e);
    }
});

router.get('/list', async function (req, res, next) {
    try {
        return await getData(req, res, next)
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;
