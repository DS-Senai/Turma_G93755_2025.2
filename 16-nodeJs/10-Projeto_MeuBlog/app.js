/**
 * npm install --save express-handlebars
 * 
 * Handlebars-> Template Engine, funcionalidade para o HTML
 * estruturas condicionas, exibir dados do backend 
 * 
 * npm install --save body-parser
 */

const express = require("express")
const app = express()
const Post = require('./models/Post')
const bodyParser = require("body-parser")
const handlebars = require('express-handlebars')
const path = require('path') 


// Config: 
//Informar ao expresse que queremos utilizar o handlebars como templete engine
// app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    //Habilitar dados para renderizr o {{each}}     
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use(express.static('public'));


app.set('view engine', 'handlebars')
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ASSETS - Dizer ao express a pasta dos arquivos estáticos
app.use(express.static(path.join(__dirname,"assets"))) // Path->Pegar caminho absoluto

// Formulario
app.get('/cadastro', function (req, res) {
    res.render('formulario')
})

// CREATE
app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo, // Pegar dados do formulários body-parser
        conteudo: req.body.conteudo
    }).then(function () {
        res.render('add') // Renderizar o add.handbars
    }).catch(function (erro) {
        res.send("Houve um erro: " + erro)
    })
})

// READ
app.get('/', function (req, res) {
    // Para exibir em ordem decrescente basta colocar entre parenteses
    Post.findAll()
        .then(function (posts) {
            res.render('home', { posts: posts });
        });
    // res.render('home');
})

// DELETE
app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } })
        .then(function () {
            const msg = "Postagem deletada com sucesso";
            res.render('delete', {msg: msg})
        }).catch(function (error) {
            const msg = "Essta postagem não foi deletada" + error;
            res.render('delete', {msg: msg});
        })
})

// PEGAR DADOS DA post PRA EDITAR
app.get("/edit/:id", (req,res) => {
    Post.findOne({ where: { id: req.params.id } }).then((post) => {
        res.render('editposts', {post: post})
    }).catch((erro) => {
        // req.flash("Error_msg", "Esta post não existe")
        res.redirect("/");
    })
    
})

// UPDATE
// EDITA post
app.post("/edit", (req,res)=>{
    Post.findOne({ where: { id: req.body.id } }).then((post) => {

        post.titulo = req.body.titulo
        post.conteudo = req.body.conteudo

        post.save().then(()=> {
            res.redirect("/")
        }).catch((erro) => {
            res.redirect("/")
        })
    })
})

const port = 8083;
app.listen(port, function () {
    console.log("Servidor rodando na url http://localhost:"+port)
})