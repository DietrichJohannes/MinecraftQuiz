var data;                                                         // Array in dem alle Fragen und Antworten gespeichert sind
var shuffledArray;                                                // Array in dem alle Fragen und Antworten gespeichert sind (Reihenfolge Zufällig)
var datalength;                                                   // Anzahl der Inhalte im Array (Anzahl der Frage)
var datablock;                                                    // Ein Datenblock besteht aus einer Frage, drei Antwortmöglichkeiten und der Richtigen Antwort

var round = 0;                                                    // Anzahl der Runden

var jsonURL = '';                                                 // URL zur Fragen JSON-Datei

var question;                                                     // Frage
var answer1;                                                      // Antwortmöglichkeit 1
var answer2;                                                      // Antwortmöglichkeit 2
var answer3;                                                      // Antwortmöglichkeit 3
var rightAnswer = "0";                                            // Richtige Antwort
var question_ID;                                                  // ID der Frage
var points = 0;                                                   // Punkte

var XpArray = [];
XpArray.push('../img/Xp Bar/0.jpg');
XpArray.push('../img/Xp Bar/2.jpg');
XpArray.push('../img/Xp Bar/4.jpg');
XpArray.push('../img/Xp Bar/6.jpg');
XpArray.push('../img/Xp Bar/8.jpg');
XpArray.push('../img/Xp Bar/10.jpg');
XpArray.push('../img/Xp Bar/12.jpg');
XpArray.push('../img/Xp Bar/14.jpg');
XpArray.push('../img/Xp Bar/16.jpg');
XpArray.push('../img/Xp Bar/18.jpg');
XpArray.push('../img/Xp Bar/20.jpg');


const Question = document.getElementById('question');               // Question Text  
const Answer1 = document.getElementById('Choice1');                 // Antwort 1 Button
const Answer2 = document.getElementById('Choice2');                 // Antwort 2 Button
const Answer3 = document.getElementById('Choice3');                 // Antwort 3 Button
const nextQ = document.getElementById('NextQuestion');              // Nächste Frage Button
const Question_ID = document.getElementById('Q_ID');                // Fragen ID
const Points = document.getElementById('points');                   // Punkte H1

var LoadText = document.getElementById('loadText');               // Spiel wird geladen Text

nextQ.style.visibility = "hidden";                                // Nächste Frage Button ausblenden


async function loadQuestions(){                                   // loadQuestions lädt die Daten aus der JSON-Datei
  const response = await fetch(jsonURL);                              // Lade daten aus der JSON-Datei
  data = await response.json();    
  data = data.QDATA;                                                                 // daten in Variable data schreiben
  shuffledArray = data.sort((a, b) => 0.5 - Math.random());       // Fragen in data mischen

  datalength = data.length;                                       // Anzahl der Datensätze auslesen

  Question.style.visibility = "visible";                          // Alle Komponenten wieder anzeigen
  Answer1.style.visibility = "visible";
  Answer2.style.visibility = "visible";
  Answer3.style.visibility = "visible";
  Points.style.visibility = "visible";
  LoadText.style.display = "none";                                // Laden Text ausblenden

  setOptions();                                                   // (3) setOptions aufrufen

} 
  

getURLMode();
loadAnimation();
                                                                
function loadAnimation(){                                  // Die Funktion loadAnimation versteckt alle Komponenten
  Question.style.visibility = "hidden";                           // solange die Frage aus der JSON-Datei geladen werden
  Answer1.style.visibility = "hidden";                          
  Answer2.style.visibility = "hidden";
  Answer3.style.visibility = "hidden";
  Points.style.visibility = "hidden";

  LoadText.style.visibility  = "visible"
  LoadText.innerHTML = "Spiel <br><br> wird <br><br> geladen...";

  loadQuestions();                                             // (2) loadQuestion aufrufen                   
}

function setOptions(){                                         // setQuestions zeigt die Fragen und Antwortmöglichkeit auf dem Bildschirm an

  
if(round < 10){                                        // Überprüfe ob bereits alle Frage gestellt wurden oder nicht

datablock = (data[round]);                                     // wenn nein hole eine neue Frage mit Antworten


question = datablock.Frage + "?";                              // Frage extrahieren
answer1 = datablock.Antwort1;                                  // Antwort 1 extrahieren
answer2 = datablock.Antwort2;                                  // Antwort 2 extrahieren
answer3 = datablock.Antwort3;                                  // Antwort 3 extrahieren
rightAnswer = datablock.Richtig;                               // Richtige Antwort extrahieren
question_ID = datablock.id;                                    // Fragen ID extrahieren

if(rightAnswer == ""){
  console.log("Question Error!");
  rightAnswer = "0";
  round++;
  setOptions();
}

if(answer3 == null){
  Answer3.style.visibility = "hidden";
}else{
  Answer3.style.visibility = "visible";
}


Question.innerHTML = question;                                 // Frage anzeigen
Question.title = question;

Answer1.innerHTML = answer1;
Answer1.title = answer1;                                       // Antwort 1 anzeigen
                                                              
Answer2.innerHTML = answer2;                                   // Antwort 2 anzeigen
Answer2.title = answer2;

Answer3.innerHTML = answer3;                                   // Antwort 3 anzeigen
Answer3.title = answer3;

Question_ID.innerHTML = question_ID;

round++;                                                       // Runde wird erhöt
  }else{
    gameOver();                                                // Wenn ja dann Game Over!
  } 
}

function gameOver(){                                                         
  Question.style.display = "none";
  Answer1.style.display = "none"
  Answer2.style.display = "none";
  Answer3.style.display = "none";
  
  LoadText.innerHTML = "Du hast <br>" + ModeText + "<br>mit <br>" + points + "von 10 <br>Punkten abgeschlossen!";
  LoadText.style.fontSize = "20px";
  LoadText.style.display = "block";
}

function nextQuestion(){

nextQ.style.visibility = "hidden";

Answer1.style.border = "2px solid rgb(173, 170, 170)";
Answer2.style.border = "2px solid rgb(173, 170, 170)";
Answer3.style.border = "2px solid rgb(173, 170, 170)";

answer1 = "";
ansewr2 = "";
answer3 = "";
rightAnswer = "";

Answer1.disabled = false;
Answer2.disabled = false;
Answer3.disabled = false;

setOptions();
}

function checkAnswers(button){      
    Answer1.disabled = true;
    Answer2.disabled = true;
    Answer3.disabled = true;      
                            // (4) Wenn eine Antwort gedrückt wird 
  // Gedrückter Button übergiebt wert (1, 2, 3)
if(rightAnswer == button){                                     // Überprüfe ob die richtige Antwort gedrückt wurde
points++;                     
    if(button == 1){
      Answer1.style.border = '2px solid rgb(13, 241, 13)';
    }else{
      if(button == 2){
        Answer2.style.border = '2px solid rgb(13, 241, 13)';
      }else{
        if(button == 3){
          Answer3.style.border = '2px solid rgb(13, 241, 13)';
        }
      }
    }     
    
    
  nextQ.style.visibility = "visible";                          // Zeigt den Button "Nächste Frage";
  updatePoints();                                              // (5) Zeigt neue Punkte Zahl
  updateXpBar();
    }else{
      nextQ.style.visibility = "visible";                      // Zeigt den Button "Nächste Frage"
      updateBorder();
    }



} 

function updateBorder(){
  Answer1.style.borderColor = 'red';
  Answer2.style.borderColor = 'red';
  Answer3.style.borderColor = 'red';

  if(rightAnswer == 1){
    Answer1.style.border = '2px solid rgb(13, 241, 13)';
  }else{
    if(rightAnswer == 2){
      Answer2.style.border = '2px solid rgb(13, 241, 13)';
    }else{
      if(rightAnswer == 3){
        Answer3.style.border = '2px solid rgb(13, 241, 13)';
      }
    }
  }
}

function updateXpBar(){
  document.getElementById('xpBar').src=XpArray[points];
}

function updatePoints(){                                        // Zeigt die neue Puktzahl
Points.textContent= points;
}