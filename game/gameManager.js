
getURLMode();
  var Mode;


function getURLMode(){

  const urlParms = new URLSearchParams(window.location.search);	// Holt URLParameter aus der URL		
  
  if(urlParms.get('mode') != null){				// Überprüft ob ein URL Paramter vorhanden ist (wenn kein Wert eingegeben wurde ist der const URLParms NULL)
      Mode = urlParms.get('mode');			// Wenn ein Wert mit dem Key Name eingegeben wurde wird die Variable PlayerName mit dem Wert überschrieben
      getMode();
    }else{
      alert("error");
    }
}

function getMode(){
  switch (Mode) {
    case "0":
      Snackbar("Friedlich");
      break;
    case "1":
      Snackbar("Einfach");
      break;
    case "2":
      Snackbar("Normal");
      break;
    case "3":
      Snackbar("Schwer");
      break;
    case "4":
       Snackbar("Hardcore");
       break;
    case "5":
      Snackbar("Überleben");
      break;
    case "6":
      Snackbar("Crafting");
      break;
  }
}

function Snackbar(text){
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  document.getElementById("snackbarText").innerHTML = text;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

