const upload = require('./multer');

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        require('../controllers/get').get(req, res);
    });
    app.post('/send', upload.single('image'),(req, res)=>{
        require('../controllers/post').post(req, res);
    });
}