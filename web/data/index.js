//<>
/*
var SpielerName = "Steve";
const urlParms = new URLSearchParams(window.location.search);	// Holt URLParameter aus der URL		

if(urlParms.get('name') != null){				// Überprüft ob ein URL Paramter vorhanden ist (wenn kein Wert eingegeben wurde ist der const URLParms NULL)
    SpielerName = urlParms.get('name');			// Wenn ein Wert mit dem Key Name eingegeben wurde wird die Variable PlayerName mit dem Wert überschrieben
}else{	
    SpielerName = prompt("Gieb deinen Namen ein");		// Wenn der kein Wert vorhanden ist öffne ein Prompt Alert um PlayerName zu bekommen
}   

*/

var InfoUrl = "https://script.google.com/macros/s/AKfycbxa9mUQZ6F9WdGoMpWD__noSt4trLKd0PCkg_-BmObBTQPj59QRGyFtBF8jypq3wXDCDQ/exec";
var SplashText = "";
var WebVersion = "";

loadSplashText();

function Snackbar(text){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    document.getElementById("snackbarText").innerHTML = text;
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  async function loadSplashText(){
  fetch(InfoUrl)
  .then(res => res.json())
  .then(data =>{
      SplashText = data[0].SplashText;
      WebVersion = data[0].WebVersion;
      if(document.getElementById('splashText') != null){
      document.getElementById('splashText').innerHTML = SplashText;
      }
      document.getElementById('Version').innerHTML = WebVersion;
  })
  }
  
