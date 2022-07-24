let clock = document.querySelector('#clock')
let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')
let dt = document.querySelector('#date')
let wd = document.querySelector('#weekDay')
let dd = document.querySelector('#dateDay')
let mt = document.querySelector('#dateMonth')
let yr = document.querySelector('#dateYear')
let inj = document.querySelector("#inj")
let isd = document.querySelector("#slide")
let dmg = document.querySelector("#dmg")

//actualDate
let takeDate = new Date()

// clock
function clockRun(){
    let momentoAtual = new Date()
    let hour = momentoAtual.getHours()
    let minut = momentoAtual.getMinutes()
    let second = momentoAtual.getSeconds()

    let strHour = new String(hour)
    let strMinut = new String(minut)
    let strSecond = new String(second)

    if (strHour.length == 1) hour = "0" + hour
    if (strMinut.length == 1) minut = "0" + minut
    if (strSecond.length == 1) second = "0" + second 

    hr.textContent = hour
    mn.textContent = minut
    sc.textContent = second

    setTimeout("clockRun()",1000)
}

//date
function onDate() {
    
    let wday = takeDate.getDay() 
    let day = takeDate.getDate()
    let month = takeDate.getMonth()+1
    let yea = takeDate.getFullYear()     
   
    let strDay = new String(day)
    
    if (strDay.length == 1) day = "0" + day

    switch(wday) {
        case 0:
            wday = "Sunday"
            break;
        case 1:
            wday = "Monday"
            break;
        case 2:
            wday = "Tuesday"
            break;
        case 3:
            wday = "Wednesday"
            break;
        case 4:
            wday = "Thursday"
            break;
        case 5:
            wday = "Friday"
            break;
        case 6:
            wday = "Saturday"
            break;
    }

    switch(month) {
        case 1:
            month = "Jan"
            break; 
        case 2:
            month = "Feb"
            break;  
        case 3:
            month = "Mar"
            break;  
        case 4:
            month = "Apr"
            break;  
        case 5:
            month = "May"
            break;  
        case 6:
            month = "Jun"
            break;  
        case 7:
            month = "Jul"
            break;  
        case 8:
            month = "Aug"
            break;  
        case 9:
            month = "Sep"
            break;  
        case 9:
            month = "Oct"
            break;  
        case 11:
            month = "Nov"
            break;  
        case 12:
            month = "Dec"
            break;
    }
    
    wd.textContent = wday
    dd.textContent = day   
    mt.textContent = month
    yr.textContent = yea
}

onDate()

//weather
function banana() {
    let url = navigator.geolocation.getCurrentPosition((position) => {
        // let lat = position.coords.latitude;
      	// let lon = position.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${-23.4628}&lon=${-46.5333}&units=imperial&appid=4a8b2af439cbc27f984c83f2e6a25a4b`
        
        fetchApi(url)
        
    })
}
banana()

function fetchApi(url) {
    let city = document.querySelector(".city")
    let temperature = document.querySelector("#temp")
    let humidity = document.querySelector("#humd")

    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
    let tempInCelsius = ((5/9)* (data.main.temp-32)).toFixed(1);

    city.textContent = data.name
    temperature.innerHTML = tempInCelsius
    humidity.innerHTML = data.main.humidity
    })
}

//inj
let injDate = new Date ("Jul, 14, 2022, 12:00 AM");
    today = new Date ();
    diff = 0;
    days = 1000*60*60*24;

diff = today - injDate;
let injtot = (Math.floor(diff / days))
inj.textContent = "00" + injtot

console.log(injtot)   

//slide
let sldDate = new Date ("Jan, 1, 2022, 12:00 AM");
    today = new Date ();
    diff = 0;
    days = 1000*60*60*24;

diff = today - sldDate;
let sldtot = (Math.floor(diff / days))
sld.textContent = sldtot

console.log(sldtot)  

//dmg
let dmgDate = new Date ("Jul, 20, 2021, 12:00 AM");
    today = new Date ();
    diff = 0;
    days = 1000*60*60*24;

diff = today - dmgDate;
let dmgtot = (Math.floor(diff / days))
dmg.textContent = dmgtot

console.log(dmgtot)  







