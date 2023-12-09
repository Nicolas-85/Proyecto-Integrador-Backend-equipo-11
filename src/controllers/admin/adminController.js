const fs = require('fs')

const admin = (req, res) => {
    let getItems = fs.readFileSync('C:/Users/seba_/OneDrive/Documents/CaC - 23573 - Javascipt y Node/Backend rutas - TEST/articulos.json')
    console.log(JSON.parse(getItems))
    getItems = JSON.parse(getItems)
    res.render('admin/admin', {getItems})
}

const createGet = (req, res) => {
    res.render('admin/create')
}

const createPost = (req, res) => {
    res.send('Elemento creado')
}

const editGet = (req, res) => {
    res.render('admin/edit')
}

const editPut = (req, res) => {
    res.send('Elemento modificado')
}

const destroy = (req, res) => {
    res.send('Elemento eliminado')
}



module.exports = {
    admin,
    createGet,
    createPost,
    editGet,
    editPut,
    destroy,
};