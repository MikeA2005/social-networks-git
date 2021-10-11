const express = require('express')
const app = express()
const path = require('path')

// Configuracion
app.set('puerto', 3000)
app.set('views',path.join(__dirname, 'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')

// Rutas
app.get('/', (req,res) => {
    res.render('index.html', {titulo: 'blog'})
})
app.get('/AndresBarrera', (req,res) => {
    res.render('andres.html', {titulo: 'blog'})
})
app.get('/MiguelAyala', (req,res) => {
    res.render('miguel.html', {titulo: 'blog'})
})
app.get('/JoseRomero', (req,res) => {
    res.render('jose.html', {titulo: 'blog'})
})
app.get('/JuanRojas', (req,res) => {
    res.render('rojas.html', {titulo: 'blog'})
})
app.get('/JuanDiaz', (req,res) => {
    res.render('juan.html', {titulo: 'blog'})
})

app.listen(process.env.PORT || app.get('puerto'), () => {
    console.log('Servidor Web Trabajando en el puerto', app.get('puerto'))
})