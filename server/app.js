const express                     = require('express');
const morgan                      = require('morgan');
const path                        = require('path');
const bodyParser                  = require('body-parser');
const cookieParser                = require('cookie-parser');
const dotenv                      = require('dotenv').config();
const Passport                    = require('passport').Passport;
const thisPassport                = new Passport();
const mongoose                    = require('mongoose');
const session                     = require('express-session');
const MongoDBStore                = require('connect-mongodb-session')(session);
const cors                        = require('cors');
const assert                      = require('assert');

const configDB                    = require('../db.config.js');

const app                         = express();


const store = new MongoDBStore(
  {
    uri: process.env.MONGODB_URI,
    collection: 'metamorphosisSessions'
  });

store.on('error', function(error) {
  assert.ifError(error);
  assert.ok(false);
});

mongoose.connect(configDB.url);

require('../passport.config.js')(thisPassport);

// required for passport
app.use(session({ secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12 // 1/2 day
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));
app.use(thisPassport.initialize());
app.use(thisPassport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//Enable CORS
app.use(cors());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/signup', thisPassport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/',
        failureFlash : true
  }));

app.post('/login', thisPassport.authenticate('local-login', {
        successRedirect : '/instructions',
        failureRedirect : '/',
        failureFlash : true
    }));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
