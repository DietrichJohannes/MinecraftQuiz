var data;
var shuffledArray;
var datalength;
var datablock;

var roud = 0;
var points = 0;

var craftingURL = 'https://jojogif2001.github.io/MinecraftQuiz/question/crafting.json';


var question;
var answer1;
var answer2;
var answer3;
var rightAnswer = "0";


const Question = document.getElementById('Crafting_Result');
const Answer1 = document.getElementById('Choice1');
const Answer2 = document.getElementById('Choice2');
const Answer3 = document.getElementById('Choice3');
const nextQ = document.getElementById('NextQuestion');
// const Points = document.getElementById('points');


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
    }
}