const express = require('express');
const app = express();

const date = require('./router/date');

app.use('/date', date);

app.listen('3000', () => console.log('Online'));
