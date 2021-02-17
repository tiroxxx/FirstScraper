const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors());

app.get('/creators', async (req, res) => {
    const creators = [
        { name: 'Code Drip', img: 'https//' },
        { name: 'CHRIS', img: 'https//' },
        { name: 'No you', img: 'https//' }
    ]

    res.send(creators)
});

app.post('/creators', async (req, res) => {
    console.log(req.body);
    res.send('success')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});