function Post(){}

Post.prototype.post = (req, res)=>{
    const name = req.file.originalname;
    const file = req.file.path;
    res.render('output.ejs', {image: file.slice(6), name: name})
}

module.exports = ()=>{
    return Post;
}