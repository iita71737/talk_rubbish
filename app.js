const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const generateText = require('./generate_talkrubbish')
const Handlebars = require('handlebars');
const H = require('just-handlebars-helpers')

H.registerHelpers(Handlebars)

app.use(express.static('public'))

// setting body-parser
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({
    defaultLayout: "main"
  }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('view')
})

app.post('/', (req, res) => {
    const choice = req.body
    const text = generateText(req.body)
    res.render('view', { option: text, choice: choice })
})

app.listen(port, () => {
    console.log(`the express server is running on http://localhost:${port}`)
})