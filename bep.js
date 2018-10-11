var beep = new Audio("bep.mp3");
var num = 0;
var beeperID = null;


//BEP
function incrementNumber() {
 beep.play();


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
