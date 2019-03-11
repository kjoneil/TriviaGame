  
// Created a timer to start from 60 and decrease by one every second.
var clock = 60;
var intervalId;

function timer(){
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement(){
  clock--;
  $('#time-left').html(clock);
  if( clock === 0){
    stop();
    alert("Time up!");
  }
}
function stop(){
  clearInterval(intervalId);
}
// calls the function which starts the countdown
timer();

// 


function answers(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

 
  
  if(question1 =="Magma"){
    correct++;
    
  }
  if(question2 =="Liquid fresh water"){
    correct++;
  }
  if(question3 =="Sedimentary"){
    correct++;
  }
  if(question4 =="Metamorphic"){
    correct++;
  }
  if(question5=="Igneous"){
    correct++;
  }
  stop();
var results = document.getElementById('quiz');

results.innerHTML = "Your Results:";

document.getElementById('results').style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}
