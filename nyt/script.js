//date
let day = new Date().getDay();
let month = new Date().getMonth();
console.log(month);

let daytext = document.querySelector('#daytext');
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var i;
for(i=1; i<8; i++){
  if(i==day){
    daytext.textContent = days[i-1];
  }
}

var j;
for(j=0; j<12; j++){
  if(j==month){
    console.log(j);
    daytext.textContent += ", " + months[j] + " " + new Date().getDate();
  }
}

daytext.textContent += ", " + new Date().getFullYear();
