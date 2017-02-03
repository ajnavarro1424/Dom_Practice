var compRand = Math.floor(Math.random()*(100+1));
var guessCounter = 0;
//Prompt to get user name\
var userName = prompt("What is your name?")
function getNumber(){

  //Gets the user input from the text
  var user_input = parseInt(document.getElementById('user_input').value);
  if(isNaN(user_input)){
    document.getElementById('numResponse').innerHTML="You didn't make a guess!";
  }
  else{
    console.log(user_input);
    document.getElementById('user_input').value = "";
    //Increments guessCounter and displays on h2
    guessCounter++;
    document.getElementById('numGuesses').innerHTML="Number of guesses: " + guessCounter;
      if(guessCounter === 7){
        document.getElementById('numResponse').innerHTML="You're out of guesses! Play again!";
        // document.getElementById('button').innerHTML="";
        document.getElementById('button').disabled = true;
      }
      else{
      isHiLow(user_input);
      }
  }
}


// Function for user input of number submitted
function isHiLow(user_input){
  //Prints random number to console
  console.log("Random number is: "+ compRand);
  //compares user_input to random number
  if (user_input < compRand) {
  document.getElementById('numResponse').innerHTML = "You're too low!";
  }
  else if(user_input > compRand){
  document.getElementById('numResponse').innerHTML="You're too high!";
  }
  else {
  document.getElementById('numResponse').innerHTML= userName + " guessed the random number!";
  document.getElementById('button').disabled = true;
  }
}
//clear text box as the user enters a number
function clearText(){
  document.getElementById('user_input').value = "";
}
