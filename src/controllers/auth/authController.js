const loginGet = (req, res) => {
    res.render("auth/login")
}

const loginPost = (req,res) => {
    res.send("/auth/login - se envía login")
}

const registerGet = (req, res) => {
    res.render("auth/register")
}

const registerPost = (req, res) =>{
    res.send("/auth/register - se envía register")
}

const logout = (req, res) => {
    res.send("/auth/logout - sesion finalizada") // se deberia redirigir al home una vez desloguead?
}

module.exports = {
    loginGet,
    loginPost,
    registerGet,
    registerPost,
    logout
}