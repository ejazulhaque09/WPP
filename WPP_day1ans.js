function currentDay(){

const day = new Date(); 

let dayN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = dayN[day.getDay()];

let hours = day.getHours();

let amPm = hours >= 12 ? "PM" : "AM";  // Toggling am and pm

hours = hours % 12;       // Converting 24hrs format into 12hrs format
if(hours == 0){           // handling edge case for 12%12  = 0
    hours = 12;
}

let seconds = day.getSeconds()
let minutes = day.getMinutes()

console.log(`Today is: ${dayName}`);
console.log(`Current time is: ${hours} : ${minutes} : ${seconds} ${amPm}`);
}


currentDay();