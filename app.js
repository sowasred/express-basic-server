const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send(`Hey this is only beginning!`)
});

app.get('/About', (req, res) => {
    res.send(`Are you talkin about me ??`);
});

app.listen(4000, () => console.log(`App listening on port 4000, roger that?`));