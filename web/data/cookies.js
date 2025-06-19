    executeCookies();

    function executeCookies(){
    document.addEventListener("DOMContentLoaded", function() {
     const cookieBanner = document.getElementById("cookie-banner");

    // Überprüfe, ob Cookies bereits akzeptiert wurden
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
     }
    });
}



function acceptCookies() {
    Snackbar("Cookies gespeichert!");
    // Speichere, dass Cookies akzeptiert wurden
    localStorage.setItem("com.quantum.minecraftquiz", "true");
    // Verstecke das Banner
    document.getElementById("cookie-banner").style.display = "none";
}