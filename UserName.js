
function userCheck () {
  var password = document.getElementById('textPass').value;
  console.log(password);
  var userId = document.getElementById('textUser').value;
  console.log(userId);
  var digit =  document.getElementById('')
  var functionCalls = [userPassLength(userId,password),passCheck(password),userPassCheck(userId,password),userPassChar(userId,password),oneDigit(password),passUpperLower(password)];
  console.log(functionCalls);
}
function clearFields () {
  document.getElementById('textUser').value = "";
  document.getElementById('textPass').value = "";

}
function userPassLength(userId,password){
  if(userId.length >= 6 && password.length >= 6){
    return true;
  }
  else{
    return false;
  }
}
function passCheck(password) {
  if(password === "password"){
    return false;
  }
  return true;
}

function userPassCheck(userId, password) {
  if(userId === password)
    return false;
  return true;
}

function userPassChar(userId, password){
  var userChar = userId.search(/[!#\$]/);
  var passChar = password.search(/[!#\$]/);

  if(userChar === -1 && passChar > -1 ){
    return true;
  }
  else{
    return false;
  }
}

function oneDigit(password) {
  var digArray = ["0","1","2","3","4","5","6","7","8","9"];
  var isDigit = 0;
  digArray.forEach(function(elementValue){
    if(password.includes(elementValue)){
      isDigit++;
    }
  });
  if(isDigit > 0)
    return true;
  else {
    return false;
  }
}

//Password has to contain a lower and an uppercase letter

function passUpperLower(password){
  var passUpper = password.toUpperCase();
  var passLower = password.toLowerCase();
  if(password < passLower && password > passUpper){
    return true;
  }
  return false;
}
