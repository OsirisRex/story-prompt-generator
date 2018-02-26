var test = [
  'Apple',
  'Banana',
  'Cabbage',
  'Dead Fish',
  'Elephant',
  'Fish',
  'Goldfish',
  'Hot Pepper',
  'Iguana',
  'Jellyfish',
  'Killer Kangaroos',
  'Lionfish',
  'Monkey',
  'Neon',
  'Octopus',
  'Potato',
  'Quill',
  'Read',
  'Snake',
  'Trouble',
  'Umbrella',
  'Vulture',
  'Water',
  'Xerox',
  'Yelling',
  'Zero',
]

function newPrompt() {
  var randomNumber = Math.floor(Math.random() * (test.length));
  console.log(randomNumber);
  document.getElementById('promptDisplay').innerHTML = test[randomNumber];
  console.log(test[randomNumber]);
}
