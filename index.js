const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.json({extended: true}));

//funçao que escreve dados
const readfile = () => {
    const data = fs.readFileSync('./data/data.json','utf-8');
    return JSON.parse(data);
}
//funçao que salva dados
const writefile = (current) => {
    const update = JSON.stringify(current);
    fs.writeFileSync('./data/data.json',JSON.stringify(current), 'utf-8')
}

router.get('/',(req,res)=>{
    const data = readfile();
    res.send(data);
});

router.post('/',(req,res)=>{
    const {cidade, bairro, rua, titulo, descricao} = req.body;//ler
    const newPost = readfile();
    const id = Math.random().toString(32).substring(2, 9);
    //adcionando
    newPost.push({id, cidade, bairro, rua, titulo, descricao});
    writefile(newPost);
    res.send({id, cidade, bairro, rua, titulo, descricao});
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const current = readfile();
    const selectedItem = current.findIndex((item)=> item.id === id);
    current.splice(selectedItem, 1);
    writefile(current);
    res.send("deleted");
});

app.use(router);
app.listen(port);