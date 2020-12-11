const Gists = require('gists');
const express = require('express')

const gists = new Gists();
const app = express()

const port = 3000

app.get('/', async (req, res) => {
    let gistid = req.query.gistid ?? '2c7d1cdbb263cc42566b064c5a8e5a56';
    let filename = req.query.filename ?? 'test-wdr.json';
    const gist = await gists.get(gistid);
    res.send(gist.body.files[filename].content);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})