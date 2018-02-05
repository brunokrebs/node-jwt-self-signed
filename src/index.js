const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');

const app = express();

const cert = fs.readFileSync('/Users/brunokrebs/git/tmp/forge/src/private.key');  // get private key
const token = jsonwebtoken.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});
console.log(token);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/protected', jwt({
    secret: 'secret'
}), (req, res) => {
    const token = req.headers.authorization.replace('Bearer ', '');

    const cert = fs.readFileSync('/Users/brunokrebs/git/tmp/forge/src/public.key');
    jsonwebtoken.verify(token, cert, function(err, decoded) {
        console.log(err);
        console.log(decoded);
        res.send(req.user);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
