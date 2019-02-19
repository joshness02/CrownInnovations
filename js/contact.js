var name = "";
var message = "";
function variable1(input) {
  name = "Hello. My name is "+input;
};
function variable3(input) {
  message = input;
};

function mail(){
  window.location.href = "mailto:calfpacifier@gmail.com?subject=Feedback/Questions&body="+name+" "+message;
  alert("Thank You!");
};
