const {indexModel} = require("../database/model/index.model");

module.exports.insertData = async function insertData(data){
   try{
       console.log(data)
       return await indexModel.create(data)
   } catch (e){
       console.log(e, 'insertData error')
   }
}

module.exports.getDataIndex = async function getDataIndex(){
    try{
        return await indexModel.find({})
            .sort({_id:-1})
            .limit(100)
    } catch (e){
        console.log(e, 'getDataIndex error')
    }
}