module.exports.post = (req, res)=>{
    const DAO = require('../models/Post')();
    const Post = new DAO;
    Post.post(req, res);
}