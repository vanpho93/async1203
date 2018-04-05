const request = require('request');

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://word1203.herokuapp.com/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://word1203.herokuapp.com/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        const URL = `http://word1203.herokuapp.com/tinh/CHIA/${a}/${b}`;
        if (b == 0) return reject(new Error('Divide by zero.'));
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

congPromise(4, 5)
.then(x => console.log(x))
.catch(error => console.log(error.message));
