import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

import router from './router';
import config from '../config';

const app = express(); // Our express server!

// DB connection through Mongoose
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; 
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, options);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [config.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// We tell express where to find static assets
app.use(express.static(__dirname + '/build'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use(cors());

router(app);

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`listening on port ${port}`);