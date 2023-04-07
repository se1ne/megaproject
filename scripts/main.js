var myImage = document.querySelector('img');

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/celeste-art.jpg') {
      myImage.setAttribute ('src', 'images/madeline2.png');
   }  else {
      myImage.setAttribute ('src', 'images/celeste-art.jpg');
   }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
   var myName = prompt('Please enter your name.');
   localStorage.setItem('name', myName);
   myHeading.textContent = 'UR good, ' + myName;
}

if (!localStorage.getItem('name')) {
   setUserName();
}  else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = 'UR good, ' + storedName;
}

myButton.onclick = function() {
   setUserName();
}