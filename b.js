const request = require('request');

function cong(a, b, cb) {
    const URL = `http://word1203.herokuapp.com/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'), null);
    request(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const URL = `http://word1203.herokuapp.com/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'), null);
    request(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const URL = `http://word1203.herokuapp.com/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'), null);
    if (b == 0) return cb(new Error('Divide by zero.'), null);
    request(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}
