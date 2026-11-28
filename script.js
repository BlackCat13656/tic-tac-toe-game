const container = document.querySelector(".container");
const gameBoard = (() => {
  return {
    grid: ["", "", "", "", "", "", "", "", ""],
  };
})();

const getPlayers = () => {
  const player = (name, marker) => {
    return { name, marker };
  };

  const markers = ["X", "O"];
  const player1 = player("Player 1", "X");
  const player2 = player("Player 2", "O");
  return { player1, player2 };
};

function playRound(players, board) {
  const { player1, player2 } = players();
  const gridArray = board.grid;

  gridArray.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<button class="button" data-id="${index}">Space #${index}</button>`;
    container.appendChild(div);
  });

  let turn = 1;
  let p1Index;
  let p2Index;

  // player 1 selects space
  // first thing to do is check if space is available so this is a check
  // if space is available to play, index number of gridArray is asigned to p1Index
  // else do nothing on UI till player 1 selects a valid space

  console.log(gridArray);
}

playRound(getPlayers, gameBoard);

//  O  O  O
//  0  0  0
//  0  0  0

// All posible winning positions
// (0, 3, 6 - 1, 4, 7 - 2, 5, 8); columns
// (0, 1, 2 - 3, 4, 5 - 6, 7, 8); rows
// (0, 4, 8 - 2, 4, 6); diagonals

getPlayers();
