
/**
 * Module dependencies.
 */

var express             = require('express')
    routes              = require('./routes'),
    user                = require('./routes/user'),
    http                = require('http'),
    path                = require('path'),
    browerifyMiddleware = require('browserify-middleware')

var app = express()

app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'hjs')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static(path.join(__dirname, 'public')))
})

app.configure('development', function(){
  app.use(express.errorHandler())
})

/*
 * Routes
*/
app.get('/', function(req, res) {
  res.render('index', {title: 'PayUP'})
})

app.get('/client/main.js', browerifyMiddleware('./client/main.js'))




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
