const express = require('express');
// const dotenv = require('')
// require(dotenv).config();
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json())

app.listen(port , ()=> {
    console.log(`App listening on port ${port}`);
})