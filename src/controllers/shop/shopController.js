const fs = require('fs')

const shopIndex = (req, res) => {
    let getItems = fs.readFileSync('C:/Users/seba_/OneDrive/Documents/CaC - 23573 - Javascipt y Node/Backend rutas - TEST/articulos.json')
    console.log(JSON.parse(getItems))
    getItems = JSON.parse(getItems)
    res.render("shop/shop", { getItems })
}

const itemGet = (req, res) => {
    let getItems = fs.readFileSync('C:/Users/seba_/OneDrive/Documents/CaC - 23573 - Javascipt y Node/Backend rutas - TEST/articulos.json')
    console.log(req.params.id)
    getItems = JSON.parse(getItems)
    console.log(getItems[req.params.id-1])
    let item = getItems[req.params.id-1]
    res.render("shop/item", { item })
}

const itemAdd = (req, res) => {
    res.send("/shop/item/:id/add - se agrega item")
}

const cartGet = (req, res) => {
    res.render("shop/carrito")
}

const cartPost = (req, res) => {
    res.send("/shop/cart - se agrega carrito")
}


module.exports = {
    shopIndex,
    itemGet,
    itemAdd,
    cartGet,
    cartPost
}