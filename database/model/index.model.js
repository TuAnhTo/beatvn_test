const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const indexSchema = Schema(
    {
        data: {type: Object }
    }
);
module.exports.indexModel = mongoose.model("index", indexSchema, "index");