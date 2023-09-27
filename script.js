var contdownDate = new Date("Oct 19, 2023 00:00:00").getTime();

var date = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
month = month + 1;


// var date = 24;
// var month = 10;
// var year = 2023;

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = contdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("secondsseconds").innerHTML = "00";
  }

  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;


  if (date == 14 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Subho ";
    document.getElementById("two").innerHTML = "Mahalaya";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 19 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Panchami";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 20 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Sasti";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 21 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Saptami";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 22 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Astami";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 23 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Novomi";
    document.getElementById("three").innerHTML = "";
  }
  if (date == 24 && month == 10 && year == 2023) {
    document.getElementById("one").innerHTML = "Maha ";
    document.getElementById("two").innerHTML = "Doshomi";
    document.getElementById("three").innerHTML = "";
  }

  
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  // document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();
}, 1000);


//doc title

let docTitle = "Durga-pujo-2023"

window.addEventListener("focus" , () =>{
  document.title = docTitle;
});

window.addEventListener("blur" , () =>{
  document.title = "Maa aschen 😊";
});
