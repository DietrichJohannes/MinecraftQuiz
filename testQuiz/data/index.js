const url = 'https://script.google.com/macros/s/AKfycbxXUe6nCX1sdE5cpn16PvFu3hljklcWrtEtRu1IYAWVD6cEAxcqrPPZ53-c076VcpLSJg/exec';

  var frage = 'Frage';
  var antwort1 = 'Antwort 1';
  var antwort2 = 'Antwort 2';
  var antwort3 = 'Antwort 3';
  var richtig = 'Richtige Antwort';
  var richtigText = '';
  var i = 1;
  var data;
  var dataLength;



async function getData(){

  const response = await fetch(url);
  data = await response.json();

  dataLength = data.length;

  document.getElementById('next').disabled = false;
  document.getElementById('loadingText').style.visibility = "hidden";

}

function print(){

  if(dataLength > i){

  document.getElementById('answer1').disabled = false;
  document.getElementById('answer2').disabled = false;
  document.getElementById('answer3').disabled = false;
  document.getElementById('right').style.visibility = "hidden";

  var cut = (data[i]);

  frage = cut.Frage;
  antwort1 = cut.Antwort1;
  antwort2 = cut.Antwort2;
  antwort3 = cut.Antwort3;
  richtigText = cut.RichtigText
  richtig = cut.Richtig;

    i++;
    setButtonText();

  }else{
    alert("Neues Siel wird gestartet!");
    i = 1;
    print();
  }
  
}

function setButtonText(){
  document.getElementById('question').innerHTML = frage;
  document.getElementById('answer1').innerHTML = antwort1;
  document.getElementById('answer2').innerHTML = antwort2;
  document.getElementById('answer3').innerHTML = antwort3;
  document.getElementById('next').innerHTML = "Weiter";

}

function checkAnswers(answer){
  if (richtig == answer){
    document.body.style.backgroundColor = "green";
    setTimeout(function(){
      document.body.style.backgroundColor = "white";
  }, 500);
  document.getElementById('answer1').disabled = true;
  document.getElementById('answer2').disabled = true;
  document.getElementById('answer3').disabled = true;

  }else{
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
      document.body.style.backgroundColor = "white";
  }, 500);
  document.getElementById('answer1').disabled = true;
  document.getElementById('answer2').disabled = true;
  document.getElementById('answer3').disabled = true;
  document.getElementById('right').innerHTML = "Richtig war Antwort " + richtig;
  document.getElementById('right').style.visibility = "visible";  
  showRightAnswer();
  }
}

function showRightAnswer(){
  document.getElementById('right').innerHTML = richtigText;
}

getData();



