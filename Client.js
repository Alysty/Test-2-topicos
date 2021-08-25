const axios = require('axios').default;
axios.post("http://localhost:3000/noticia", {
    titulo: "titulo",
    resumo:"resumo",
    url:"url.com"
})
    .then(res=>console.log("first noticia post: " + res.status))
    .catch(err=>console.log(err))
axios.post("http://localhost:3000/noticia", {
    titulo: "titulo2",
    resumo:"resumo2",
    url:"url2.com"
})
    .then(res=>console.log("second noticia post: " + res.status))
    .catch(err=>console.log(err))
axios.post("http://localhost:3000/noticia", {
    titulo: "titulo3",
    resumo:"resumo3",
    url:"url3.com"
})
    .then(res=>console.log("third noticia post: " + res.status))
    .catch(err=>console.log(err))


//---------------------------------------------------------------------------------------------------------//


axios.post("http://localhost:3000/inscricao", {
    email: 'test@bol.com'
})
    .then(res=>console.log("first email post: " + res.status))
    .catch(err=>console.log(err))

axios.post("http://localhost:3000/inscricao", {
    email: 'test@outlook.com'
})
    .then(res=>console.log("second email post: " + res.status))
    .catch(err=>console.log(err))

axios.post("http://localhost:3000/inscricao", {
    email: 'test@protonmail.ch'
})
    .then(res=>console.log("third email post: " + res.status))
    .catch(err=>console.log(err))

axios.post("http://localhost:3000/inscricao", {
    email: 'test@gmail.com'
})
    .then(res=>console.log("fourth email post: " + res.status))
    .catch(err=>console.log(err))
