const { sign, verify } = require('jsonwebtoken');

const SECRET_KEY = '124yr9qwfyjhq';

sign({ _id: 'abcd' }, SECRET_KEY, { expiresIn: 600 }, (error, token) => {
    if (error) return console.log(error.message);
    console.log(token);
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmNkIiwiaWF0IjoxNTIyOTIxMzM0LCJleHAiOjE1MjI5MjE5MzR9.UtT-Dx36bymaca8XdiPbJR2Ej5CVhN37_BAFngzoLNs';
verify(token, SECRET_KEY, (error, obj) => {
    if (error) return console.log(error.message);
    console.log(obj);
});
