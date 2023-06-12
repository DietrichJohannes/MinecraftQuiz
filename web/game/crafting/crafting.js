var data;
var shuffledArray;
var datalength;
var datablock;

var round = 0;
var points = 0;

var craftingURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/crafting.json';


var question;
var answer1;
var answer2;
var answer3;
var rightAnswer;

var XpArray = [];
XpArray.push('../../img/Xp Bar/0.jpg');
XpArray.push('../../img/Xp Bar/2.jpg');
XpArray.push('../../img/Xp Bar/4.jpg');
XpArray.push('../../img/Xp Bar/6.jpg');
XpArray.push('../../img/Xp Bar/8.jpg');
XpArray.push('../../img/Xp Bar/10.jpg');
XpArray.push('../../img/Xp Bar/12.jpg');
XpArray.push('../../img/Xp Bar/14.jpg');
XpArray.push('../../img/Xp Bar/16.jpg');
XpArray.push('../../img/Xp Bar/18.jpg');
XpArray.push('../../img/Xp Bar/20.jpg');


const Question = document.getElementById('Crafting_Result');
const Answer1 = document.getElementById('Choice1');
const Answer2 = document.getElementById('Choice2');
const Answer3 = document.getElementById('Choice3');
const nextQ = document.getElementById('NextQuestion');
const Round = document.getElementById('RundenAnzahlCrafting');
const Points = document.getElementById('points');
const LoadText = document.getElementById('loadText');
// const Points = document.getElementById('points');

loadQuestions();

nextQ.style.visibility = "hidden";

async function loadQuestions(){
    const response = await fetch(craftingURL);
    data = await response.json();
    data = data.QDATA;
    shuffledArray = data.sort((a, b) => 0.5 - Math.random());  

    datalength = data.length;

    // show load Text

    setOptions();
}


function setOptions(){
    if(round < 10){
        datablock = (data[round]);

        question = datablock.Frage;
        answer1 = datablock.Antwort1;
        answer2 = datablock.Antwort2;
        answer3 = datablock.Antwort3;
        rightAnswer = datablock.Richtig;


        if(rightAnswer == ""){
            console.log("Question Error!");
            rightAnswer = "0";
            round++;
            setOptions();
          }

          Question.src = question;
          Answer1.src = answer1;
          Answer2.src = answer2;
          Answer3.src = answer3;
        

          round++;
          updateRound();
    }else{
        gameOver();
    }
}

function checkAnswers(button){    
  Answer1.disabled = true;
  Answer2.disabled = true;
  Answer3.disabled = true;  
  
  // (4) Wenn eine Antwort gedrückt wird 
    // Gedrückter Button übergiebt wert (1, 2, 3)
    console.log(button);
 if(rightAnswer == button){                                  // Überprüfe ob die richtige Antwort gedrückt wurde
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

  function updatePoints(){
    Points.innerHTML = points;
  }

  function updateXpBar(){
    document.getElementById('xpBar').src=XpArray[points];
  }

  function updateRound(){
    Round.innerHTML = round + ".";
  }

  function updateBorder(){
    Answer1.style.border = '2px solid rgb(255, 0, 0)';
    Answer2.style.border = '2px solid rgb(255, 0, 0)';
    Answer3.style.border = '2px solid rgb(255, 0, 0)';
  
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

function nextQuestion(){
nextQ.style.visibility = "hidden";

Answer1.style.border = "2px solid rgb(173, 170, 170)";
Answer2.style.border = "2px solid rgb(173, 170, 170)";
Answer3.style.border = "2px solid rgb(173, 170, 170)";

Answer1.disabled = false;
Answer2.disabled = false;
Answer3.disabled = false;

setOptions();
}

function gameOver(){
  Question.style.display = "none";
  Answer1.style.display = "none"
  Answer2.style.display = "none";
  Answer3.style.display = "none";
  Round.style.display = "none";
  document.getElementById('CraftingHeadline').style.display = "none";
  document.getElementById('Headline').style.display = "none";
  
  LoadText.innerHTML = "Du hast <br>" + "Crafting" + "<br>mit <br>" + points + " von 10 <br>Punkten abgeschlossen!";
  LoadText.style.fontSize = "20px";
  LoadText.style.display = "block";
}