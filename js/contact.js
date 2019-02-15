var name = "";
var raise = "I do not raise bottle calves.";
var message = "";
function variable1(input) {
  name = "Hello. My name is "+input;
};
function variable2(input) {
  raise = input;
};
function variable3(input) {
  message = input;
};

function mail(){
  window.open("mailto:calfpacifier@gmail.com?subject=Feedback/Questions&body="+name+"\n"+raise+"\n"+message);
};
