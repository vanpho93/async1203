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

/*
    day Nho 4
    day Lon 5
    chieu cao 6
*/
function tinhDienTich(a, b, h, cb) {
    cong(a, b, (errorCong, tong) => {
        if (errorCong) return cb(errorCong);
        nhan(tong, h, (errorNhan, tich) => {
            if (errorNhan) return cb(errorNhan);
            chia(tich, 2, (errorChia, kq) => {
                if (errorChia) return cb(errorChia);
                cb(null, kq);
            });
        });
    });
}

tinhDienTich(4, 5, 6, (error, result) => {
    if (error) return console.log(error.message);
    console.log('DIEN TICH =', result);
});

tinhDienTich(8, 5, 'x', (error, result) => {
    if (error) return console.log(error.message);
    console.log('DIEN TICH =', result);
});
