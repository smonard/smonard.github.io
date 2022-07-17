const messages = [
  "Espero que estés en el mejor día de tu vida", 
  "I hope you are having the best day of your life",
  "Надеюсь, у тебя лучший день в твоей жизни",
  "Espero que você esteja no melhor dia da sua vida",
  "J'espère que tu as le meilleur jour de ta vie"
];

var nextMessage = 0;

function switchMessage() {
  document.getElementById("message").innerHTML = messages[nextMessage];
  nextMessage = nextMessage === 4 ? 0 : nextMessage + 1
}

function playMessages() {
  switchMessage();
  setInterval(switchMessage, 3500);
}
