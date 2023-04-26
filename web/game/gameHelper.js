  var Mode;
  var ModeText;



function getURLMode(){

  const urlParms = new URLSearchParams(window.location.search);	// Holt URLParameter aus der URL		
  
  if(urlParms.get('mode') != null){				// Überprüft ob ein URL Paramter vorhanden ist (wenn kein Wert eingegeben wurde ist der const URLParms NULL)
      Mode = urlParms.get('mode');			// Wenn ein Wert mit dem Key Name eingegeben wurde wird die Variable PlayerName mit dem Wert überschrieben
      getMode();
    }else{
      alert("Mode Error");
      window.location.href = '../gameMenue/menue.html'
    }
}

function getMode(){   // Überprüfe welcher Modi gewähtl wurde

  if(Mode < 7){

  switch (Mode) {
    case "0":
      Snackbar("Friedlich");
      ModeText = "Friedlich";
      jsonURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/friendly.json';
      break;
    case "1":
      Snackbar("Einfach");
      ModeText = "Einfach";
      jsonURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/easy.json';
      break;
    case "2":
      Snackbar("Normal");
      ModeText = "Normal";
      jsonURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/normal.json';
      break;
    case "3":
      Snackbar("Schwer");
      ModeText = "Schwer";
      jsonURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/hard.json';
      break;
    case "4":
       Snackbar("Hardcore");
       ModeText = "Hardcore";
       jsonURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/hardcore.json';
       break;
    case "5":
      Snackbar("Überleben");
      ModeText = "Überleben";
      jsonURL = '';
      break;
    case "6":
      Snackbar("Crafting");
      ModeText = "Crafting";
      jsonURL = '';
      break;
  }
}else{
  alert("Ungültiger Modi!")
  window.location.href = '../gameMenue/menue.html'
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

