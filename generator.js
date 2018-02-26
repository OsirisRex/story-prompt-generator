var person = [
  'Murderer',
  'Victim',
]

function newPrompt() {
  var randomNumber1 = Math.floor(Math.random() * (person.length));
  var randomNumber2 = Math.floor(Math.random() * (person.length));
  document.getElementById('Person1').innerHTML = person[randomNumber1];
  document.getElementById('Person2').innerHTML = person[randomNumber2];
}
