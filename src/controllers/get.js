module.exports.get = (req,res)=>{
    const DAO = require('../models/Get')();
    const Get = new DAO;
    Get.get(req, res);
}