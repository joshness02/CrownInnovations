var name = "";
var message = "";
function variable1(input) {
  name = input;
};
function variable3(input) {
  message = input;
};

function mail(){
  window.location.href = "mailto:calfpacifier@gmail.com?subject=Feedback/Questions&body="+message+" Thanks, "+name;
};
