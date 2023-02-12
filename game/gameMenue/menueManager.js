// <>

var modeInt;
var modeSelected = false;

function changeText(mode, modeString){
   modeInt = mode;
   document.getElementById('dropButton').value = modeString;
   modeSelected = true;
}

function startGame(){
   if(modeSelected){
   window.open("../game.html?mode=" + modeInt, "_self");
   }else{
    // Get the snackbar DIV
  var x = document.getElementById("snackbar");

   document.getElementById('snackbarText').innerHTML = "Wähle einen Modus!";
   

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }
}