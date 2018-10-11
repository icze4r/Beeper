var beep = new Audio("bep.mp3");
var num = 0;
var max = 11;
var beeperID = null;


//set the beeper to beep at 30 second intervals
function incrementNumber() {
 beep.play();
 num++;

 if(num == max) {
  clearInterval(beeperID);
  num = 0;
  beeperID = null;
 }


}

function start () {
 beep.play()
 beeperID = setInterval(incrementNumber, 300000);
}
//clear timeout
function stop() {
 clearInterval(beeperID);
 num = 0;
 beeperID = null;
}
