const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json({extended: true}));
app.use(cors({origin: '*'}))

const readfile = () => {
    const data = fs.readFileSync('./dbjson/cars.json','utf-8');
    return data//JSON.parse(data);
}

app.get('/',(req,res)=>{
    const data = readfile();
    res.send(data);
});

app.listen(PORT);