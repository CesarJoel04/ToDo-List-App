const express = require('express');
const api = require('./api');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})