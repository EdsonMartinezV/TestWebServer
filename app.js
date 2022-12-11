require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Serve static content; 'use' for middlewares
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Edson Martinez',
    title: 'Node course'
  })
})

app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Edson Martinez',
    title: 'Node course'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Edson Martinez',
    title: 'Node course'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    name: 'Edson Martinez',
    title: 'Node course'
  })
})

/* Send html as a file, not a rendered view
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
}) */

app.listen(port, () => { console.log(`App listening at ${port}`) })
