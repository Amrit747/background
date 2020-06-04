var userInput = document.getElementById("userInput");
var submit = document.getElementById("save");
var ul = document.querySelector("ul");

function userLength(){
  return userInput.value.length;
}

function addItem(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
}

function afterClick(){
  if(userLength()>0){
    addItem();
}
}

function afterKey(event){
  if(userLength()>0 && event.keyCode === 13){
    addItem();
}
}

submit.addEventListener("click",afterClick);

userInput.addEventListener("keypress", afterKey);
document.querySelector("h1").innerHTML("<strong>Welcome to my list and edit</strong>");
