const request = require('request');

function getTemp(cityName, cb) { //callback
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    request(URL + cityName, (error, response, body) => {
        if (error) return console.log(error.message);
        const obj = JSON.parse(body);
        cb(obj.main.temp);
    });
}

getTemp('Hanoi', temp => console.log(temp));
getTemp('SaiGon', temp => console.log('Temp:', temp));
