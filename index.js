const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')

const PORT = process.env.PORT || 3000;

const read = () => {
    const data = fs.readFileSync('./jsonarchs/times.json','utf-8');
    return data;
}

app.use(cors({origin: '*'}))

app.get('/times', (req,res)=>{
    const data = read();
    res.send(data);
});


app.listen(PORT, ()=>{
    console.log('on in ' + PORT);
})