// ____________________ week of the day  _____________________________
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}

let weekOfTheDay = document.querySelector(".weekOfTheDay");
weekOfTheDay.innerHTML = day;


// ______________________ UTC-time ___________________________
var utcTime = document.querySelector(".utcTime");

setInterval(utctime, 1);
function utctime(){
    const currentTimeInMilliseconds = Date.now();
    utcTime .innerHTML = currentTimeInMilliseconds
}