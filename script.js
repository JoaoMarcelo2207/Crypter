document.getElementById("CodifyButton").addEventListener("click", function() {
    var message = document.getElementById("CodifyTextBox").value;
    var key = document.getElementById("KeyTextBox").value;
    if(onlyNumbers(key)) return;
    message = codify(message, key);
    alert(message);
  });

function onlyNumbers(x){
  if(isNaN(x))alert("Please type a number!");
}

function codify(text, key) {

}

function decodify(text, key){
  
}

