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
// const start = Date.now();

// Promise.all([
//     congPromise(4, 5),
//     chiaPromise(6, 'x').catch(() => 10)
// ])
// .then(([tong, thuong]) => nhanPromise(tong, thuong))
// .then(kq => {
//     console.log(kq);
//     console.log(Date.now() - start);
// })
// .catch(error => console.log(error));

// Promise.race([
//     congPromise(4, 5),
//     chiaPromise(6, 2)
// ])
// .then(kq => console.log(kq))
// .catch(error => console.log(error));

// Promise.resolve(10)
// .then(kq => console.log(kq))
// .catch(kq => console.log(kq))

Promise.reject(10)
.then(kq => console.log(kq))
.catch(error => console.log('error', error))
