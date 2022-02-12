$(document).ready(function (){
    $('#contact-locked-screen').click(()=>{
        $('#contact-locked-screen').css('display', 'none');
        $('#contact-form-screen').css('display', 'flex');
    })

    

});
function sendMessage(){
  $("#contact-form-screen").css('opacity', '0.2');
  $("#TYp").css('display', 'inline');
  setTimeout("appearBack()", 3000);
}
function appearBack(){
  $("#contact-form-screen").css('opacity', '1');
  $("#TYp").css('display', 'none');
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    document.getElementById('timeS').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

startTime();

const today = new Date();
const options = {
	weekday: "long", 
  	month: "long",
}

var shortYear = today.getFullYear();
var twoDigitYear = shortYear.toString().slice(2);
let sDay = today.toLocaleDateString("en-US", options);
sDay = sDay.split(' ');
console.log(sDay[0]);
document.getElementById('date').innerHTML = sDay[1] + ', ' + sDay[0] + ' ' + twoDigitYear;
