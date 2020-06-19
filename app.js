const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./checkUser')
const app = express()
const port = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const singIn = checkUser(req.body.email, req.body.password)
  let email = req.body.email
  const storeEmail = req.body.storeEmail
  const errorMessage = 'Oops!!! Incorrect email or password, please try again.'
  if (singIn !== 'fail') {
    res.render('login', { singIn })
  }
  else {
    if (storeEmail !== 'on') {
      email = ''
    }
    res.render('index', { email, errorMessage, storeEmail })
  }
})

app.listen(port, () => {
  console.log(`Login is running on http://localhost:${port}`)
})