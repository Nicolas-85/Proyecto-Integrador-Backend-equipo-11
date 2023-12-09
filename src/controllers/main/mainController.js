const index = (req, res) => {
    res.render('home/index')
}

const contact = (req, res) => {
    res.send('contacto')
}

const about = (req, res) => {
    res.send('about')
} 

const faqs = (req, res) => {
    res.send('faqs')
}


module.exports = {
    index,
    contact,
    about,
    faqs
}