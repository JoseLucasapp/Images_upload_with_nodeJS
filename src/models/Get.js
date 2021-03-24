function Get(){

}

Get.prototype.get = (req, res)=>{
    res.render('index.ejs')
}

module.exports = ()=>{
    return Get;
}