const gameBoard = (() => {
  return {
    grid: ["", "", "", "", "", "", "", "", ""],
  };
})();

const player = (name, marker) => {
  return { name, marker };
};

function getPlayers() {
  const markers = ["X", "O"];
  const playerUser = player("Ekan", markers[0]);
  const playerComputer = player("Computer", markers[1]);
  return { playerUser, playerComputer };
}

const gamePlay = function () {
  // access grid
  console.log(gameBoard);

  // get player names and marker selections
  console.log(getPlayers());
};

gamePlay();

//  O  O  O
//  0  0  0
//  0  0  0

// All posible winning positions
// (0, 3, 6 - 1, 4, 7 - 2, 5, 8);
// (0, 1, 2 - 3, 4, 5 - 6, 7, 8);
// (0, 4, 8 - 2, 4, 6);
