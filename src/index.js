const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');

const app = express();

const privateKey = fs.readFileSync('./src/private.key');  // get private key
const publicKey = fs.readFileSync('./src/public.key');
const token = jsonwebtoken.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
console.log(token); // <= use this token

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/protected', jwt({
    secret: publicKey
}), (req, res) => {
    res.send(req.user);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
