const gameBoard = (() => {
  return {
    grid: ["", "", "", "", "", "", "", "", ""],
  };
})();

const player = (name, marker) => {
  return { name, marker };
};

const getPlayers = () => {
  const markers = ["X", "O"];
  const playerUser = player("Ekan", markers[0]);
  const playerComputer = player("Computer", markers[1]);
  return { playerUser, playerComputer };
};

function playRound(board, players) {
  console.log(board, players);

  const playerIndex = 0;
  let computerIndex = Math.floor(Math.random() * board.length);

  while (computerIndex === playerIndex) {
    computerIndex = Math.floor(Math.random() * board.length);
  }
}

const gamePlay = function () {
  // get board
  const board = gameBoard.grid;

  // get player names and marker selections
  const players = getPlayers();

  // play a round
  playRound(board, players);
};

gamePlay();

//  O  O  O
//  0  0  0
//  0  0  0

// All posible winning positions
// (0, 3, 6 - 1, 4, 7 - 2, 5, 8); columns
// (0, 1, 2 - 3, 4, 5 - 6, 7, 8); rows
// (0, 4, 8 - 2, 4, 6); diagonals
