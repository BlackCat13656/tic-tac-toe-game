const gameBoard = (() => {
  const grid = ["", "", "", "", "", "", "", "", ""];
})();

function player(name, selection) {
  return { name: name, selection: selection };
}

function playGame() {
  const human = getPlayerSelection();
  const computer = geteBotSelection();

  // functions
  function getPlayerSelection() {
    let name = prompt("What's your name?");
    let selection = prompt("Your turn, X or O?");
    while (selection !== "X" && selection !== "O") {
      selection = prompt("Wrong answer. Type X or O.");
    }
    return player(name, selection);
  }

  function geteBotSelection() {
    const options = ["X", "O"];
    const selection = options[Math.floor(Math.random() * options.length)];
    return player("Computer", selection);
  }

  return { human, computer };
}

console.log(playGame());
