var person = [
  'Murderer',
  'Victim',
  'lost person',
  'girl who just lost her mother',
  'boy who just lost his father',
]
var images = [
  'Images/barn1.jpg',
  'Images/street1.jpg',
  'Images/forest1.jpg',
  'Images/lighthouse1.jpg',
  'Images/city1.jpg',
  'Images/street2.jpg',
  'Images/village1.jpg'
]
function newPrompt() {
  var randomNumber1 = Math.floor(Math.random() * (person.length));
  var randomNumber2 = Math.floor(Math.random() * (person.length));
  var imageNumber = Math.floor(Math.random()*(images.length));
  while (randomNumber1 == randomNumber2) {
    randomNumber2 = Math.floor(Math.random() * (person.length));
  }
  document.getElementById('Person1').innerHTML = person[randomNumber1];
  document.getElementById('Person2').innerHTML = person[randomNumber2];
  document.getElementById('image').src = images[imageNumber];
}
