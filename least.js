const locate = document.querySelector('h1');
const time = document.querySelector('h3');
const temp = document.querySelector('#temp');
const humid = document.querySelector('#humid');
const wind = document.querySelector('#wind'); 

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {

    if(xhr.readyState === 4);

    if(xhr.status === 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
        locate.innerHTML = `${data.location.name}`;
        time.innerHTML = `The Current Time Is: ${data.location.localtime}`;
        temp.innerHTML = `${data.current.temp_f} fahrenheit`;
        humid.innerHTML = `Humidity: ${data.current.humidity}`;
        wind.innerHTML = `windspeed: ${data.current.wind_mph}`;

        }else if(xhr.status === 404){
            alert(`we could not find the page`);

        }else if(xhr.status === 500){
            alert(`the server is taking a break`);
        }
    };
xhr.open('GET', );
xhr.send();