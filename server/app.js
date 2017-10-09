require('dotenv').config()
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport')
const session = require('express-session')
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose     = require('mongoose');
const MongoStore = require('connect-mongo')(session)
const cors = require('cors')



const app = express();

require('./config/database');

var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((req, res, next) => {
 res.sendfile(__dirname + '/public/index.html');
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60*60*24*365 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport/serializers');
require('./passport/local');

app.use(passport.initialize());
app.use(passport.session());

const checkDb = require('./routes/myDb')
const singleGame = require('./routes/findGames')
const gamesRoutes = require('./routes/prueba')
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
app.use('/api', gamesRoutes)
app.use('/api', singleGame)
app.use('/api', checkDb)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
