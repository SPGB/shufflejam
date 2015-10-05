categories = ['platformer', 'isometric', 'first person', 'third person'];
gameType = ['RPG', 'RTS', 'shoot\'em up', 'beat\'em up', 'maze', 'survival', 'dating sim', 'flight sim', 'turn-based', 'puzzle game', 'incremental', 'rhythm game'];
action = ['rescue', 'destroy', 'save', 'romance', 'overcome', 'transform into', 'dethrone', 'assassinate', 'capture', 'realize your life long passion to be'];
thing = ['a toad', 'a wizard', 'a magician', 'a knight', 'a plant', 'a cat', 'a goat', 'the princess', 'the prince', 'a time traveler'];
startTime = ['24', '00', '00'];

//example: Build a *isometric* *RPG* where you *rescue* a *toad*
function generate() {
    return [getRand(categories), getRand(gameType), 'where you', getRand(action), getRand(thing)].join(' ');
}
function getRand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function init() {
  $('h1').text( generate() );
  startTime = ['24', '00', '00'];
}

//init script on page load
$(function () {
  init();
  $('#retry').click(function () {
    init();
  });;
  setInterval(function () {
    $('.timer').text(startTime.join(':'));
    try {
      startTime[2]--;
      if (startTime[2] < 0) {
        startTime[2] = '59';
        startTime[1]--;
      }
      if (startTime[1] < 0) {
        startTime[1] = '59';
        startTime[0]--;
      }
      if (startTime[0] < 0) {
        startTime = 'TIME IS UP';
      }
    } catch (err) {
      console.log(err);
    }
  }, 1000);
});