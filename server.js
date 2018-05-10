const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const { port } = require('./config/app');
const routes = require('./app/routes');

const app = express();

app.use(express.static(path.resolve('public')));
app.set('view engine', 'njk');

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.use(routes);

app.listen(port, () => global.console.log('Running...'));
