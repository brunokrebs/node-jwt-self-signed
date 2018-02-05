const jwt = require('jsonwebtoken');
const fs = require('fs');

const publicKey = fs.readFileSync('./src/public.key');

const token = jwt.sign({ foo: 'bar' }, publicKey);
console.log(token);