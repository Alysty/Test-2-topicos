
const express = require('express');
const storage = require('node-persist');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ extended: true }));


app.post('/noticia', async (req, res) => {
// { titulo: "", resumo: "", url: "" } - adiciona uma notícia, gerando um identificador (id) único
    await storage.init();
    let noticiaArray;
    try{
        noticiaArray =  await storage.getItem('noticia')
    }catch {
        noticiaArray = undefined
    }
    if(noticiaArray === undefined){
        await storage.setItem('noticia',[{key: await getKey(), titulo: req.body.titulo, resumo:req.body.resumo, url:req.body.url}]);
    }else{
        noticiaArray.push({key: await getKey(), titulo: req.body.titulo, resumo:req.body.resumo, url:req.body.url})
        await storage.setItem('noticia', noticiaArray);
    }
    res.status(200)
    res.send({titulo: req.body.titulo, resumo:req.body.resumo, url:req.body.url})
});

async function getKey(){
    await storage.init()
    let key = await storage.getItem('ID')
    if(key === undefined){
        await storage.setItem('ID', 0);
        return 0
    }else{
        await storage.setItem('ID', key + 1 );
        return key + 1
    }
}

app.get('/noticia', async (req, res) => {
    await storage.init()
    res.status(200)
    res.send(await storage.getItem('noticia'))
});

app.get('/noticia/:id', async (req, res) => {
    let foundResult = await getNoticia(req)
    if(foundResult === undefined){
        res.status(404)
        res.send()
    }else{
        res.status(200)
        res.send(foundResult)
    }
});
async function getNoticia(req){
    await storage.init()
    let noticiaArray = await storage.getItem('noticia')
    return noticiaArray.find(noticia=>noticia.key === parseInt(req.params.id))
}

app.post('/inscricao', async (req, res) => {
// { email: ..} - registra o email em uma lista
    await storage.init();
    let emailArray;
    try{
        emailArray =  await storage.getItem('email')
    }catch {
        emailArray = undefined
    }
    if(emailArray === undefined){
        await storage.setItem('email',[{email: req.body.email}])
    }else{
        emailArray.push({email: req.body.email})
        await storage.setItem('email', emailArray)
    }
    res.status(200)
    res.send({email: req.body.email})
});



app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
})