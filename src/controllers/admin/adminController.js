const index = (req, res) => {
    res.render('admin')
}

const createGet = (req, res) => {
    res.render('create')
}

const createPost = (req, res) => {
    res.send('Elemento creado')
}

const editGet = (req, res) => {
    res.render('edit')
}

const editPut = (req, res) => {
    res.send('Elemento modificado')
}

const destroy = (req, res) => {
    res.send('Elemento eliminado')
}



module.exports = {
    index,
    createGet,
    createPost,
    editGet,
    editPut,
    destroy,
};