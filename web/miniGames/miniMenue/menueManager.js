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
      if(modeInt == 0){
   window.open("../steve/steve.html");
      }else{
         if(modeInt == 1){
            window.open("../tetris/tetris.html");
         }
      }
   }else{
    // Get the snackbar DIV
  var x = document.getElementById("snackbar");

   document.getElementById('snackbarText').innerHTML = "Wähle ein Mini Game!";
   

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   }
}