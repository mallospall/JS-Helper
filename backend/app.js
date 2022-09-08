/* eslint-disable consistent-return */
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { User, Question } = require('./db/models');

const PORT = 3002;
const app = express();
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(morgan('dev'));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/reg', async (req, res) => {
  try {
    const finduser = await User.findAll({ where: { email: req.body.email } });
    if (finduser[0]) {
      const hashPass = await bcrypt.hash(req.body.password, 10);
      await User.create({
        email: req.body.email,
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      req.session.UserSession = req.body;
      res.json(req.session.UserSession.email);
    }
  } catch (error) {
    res.json(error);
  }
});
app.get('/login', async (req, res) => {
  try {
    const logUser = await User.findAll({ Where: { email: req.body.email } });
    const result = await bcrypt.compare(req.body.password, logUser.password);
    if (result) {
      req.session.UserSession = req.body;
      return res.json(req.session.UserSession.email);
    }
    return res.sendStatus(202);
  } catch (error) {
    res.json(error);
  }
});
app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('mega-cookie');
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});
app.get('/question', async (req, res) => {
  try {
    const numofQuestion = await Question.findAll();
    console.log('123');
    const r = Math.floor(Math.random() * numofQuestion.length + 1);
    const newQuestion = await Question.findAll({ where: { id: r } });
    res.json(newQuestion);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});