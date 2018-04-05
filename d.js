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

async function tinhDienTich(a, b, h) {
    try {
        const tong = await congPromise(a, b);
        const tich = await nhanPromise(tong, h);
        const kq = await chiaPromise(tich, 2);
        return kq;
    } catch (error) {
        throw new Error('Loi tinh dien tich');
    }
}

// tinhDienTich(4, 5, 6)
// .then(result => console.log(result))
// .catch(error => console.log(error.message));

tinhDienTich(4, 5, 'x')
.then(result => console.log(result))
.catch(error => console.log(error.message));
