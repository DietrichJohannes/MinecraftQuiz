var InfoUrl = "https://script.google.com/macros/s/AKfycbztoBSaf2CD7wjyzSuzxmNlWaUT2lZzXPdWrRnAlpCEXgejl-DX-dt0chbVEZws3sZYkg/exec";
var SplashText = "";
var WebVersion = "";

loadSplashText();

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();

    });
});

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
  
