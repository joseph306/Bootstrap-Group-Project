// Salem, Massachusetts
const locate = document.querySelector('h1');
const time = document.querySelector('#time');
const temp = document.querySelector('#temp');
const humid = document.querySelector('#humid');
const wind = document.querySelector('#wind'); 
const icon = document.querySelector('#current');
// create the request
let xhr = new XMLHttpRequest();
// create the callback
xhr.onreadystatechange = () => {
// run callback is request is succesful
    if(xhr.readyState === 4);

    if(xhr.status === 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
        locate.innerHTML = `${data.location.name}`;
        time.innerHTML = `The Current Time Is: ${data.location.localtime}`;
        temp.innerHTML = `${data.current.temp_f} fahrenheit`;
        humid.innerHTML = `Humidity: ${data.current.humidity}`;
        wind.innerHTML = `windspeed: ${data.current.wind_mph}`;
        icon.innerHTML = data.current.condition.text;
// display message if unsuccesfull
        }else if(xhr.status === 404){
            alert(`we could not find the page`);

        }else if(xhr.status === 500){
            alert(`the server is taking a break`);
        }
    };
// open request
xhr.open('GET', 'http://api.weatherapi.com/v1/current.json?key=9008d4b175a84565aa005823202210&q=salem, Massachusetts');
// send request
xhr.send();


// Santa Fe, New Mexico
const locate2 = document.querySelector('#loc');
const time2 = document.querySelector('#time2');
const temp2 = document.querySelector('#temp2');
const humid2 = document.querySelector('#humid2');
const win2d = document.querySelector('#wind2'); 
const icon2 = document.querySelector('#current2')
// create request
let xhr2 = new XMLHttpRequest();
// create callback
xhr2.onreadystatechange = () => {
// run callback if request is succesful
    if(xhr2.readyState === 4);

    if(xhr2.status === 200){
        const data = JSON.parse(xhr2.response);
        console.log(data);
        locate2.innerHTML = `${data.location.name}`;
        time2.innerHTML = `The Current Time Is: ${data.location.localtime}`;
        temp2.innerHTML = `${data.current.temp_f} fahrenheit`;
        humid2.innerHTML = `Humidity: ${data.current.humidity}`;
        wind2.innerHTML = `windspeed: ${data.current.wind_mph}`;
        icon2.innerHTML = `${data.current.condition.text}`;
// display message if unsuccessful
        }else if(xhr2.status === 404){
            alert(`we could not find the page`);

        }else if(xhr2.status === 500){
            alert(`the server is taking a break`);
        }
    };
// open request
xhr2.open('GET','http://api.weatherapi.com/v1/current.json?key=9008d4b175a84565aa005823202210&q=Santa Fe, New Mexico');
// send request
xhr2.send();