const express = require('express');
const path = require('path');

const app = express();

const PORT = 80;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.use('/views', express.static(path.join(__dirname, 'views')));

app.listen(PORT, error => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});