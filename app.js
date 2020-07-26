//require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const trashGen = require('./talkingtrash')
const Handlebars = require("handlebars")
const port = 3000

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))


//自定義helper
Handlebars.registerHelper('if_equal', function (job, expectedJob, options) {
  if (job === expectedJob) {
    return options.fn(this);
  }
  return options.inverse(this);
});


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // console.log('req.body', req.body)
  // console.log('幹話: ', trashGen(req.body.target))
  const trashy = trashGen(req.body.target)
  const job = req.body.target
  res.render('index', { trashy: trashy, job: job })
})


app.listen(port, () => {
  console.log(`The Express server is running on http://localhost: ${port}`)
})