// selectors
const cells = document.querySelectorAll('.grid__element');
const btnClear = document.querySelector('.btn__clear');
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const winnerDiv = document.querySelector('.div__winner');
const playAgain = document.querySelector('.btn__play__again');
const messageWinner = document.querySelector('.message__winner');

// function create Player
const player = function (playerName, playerMark) {
  const getName = () => playerName;
  const getMark = () => playerMark;
  // set name, set mark
  const setName = (value) => (value = playerName);
  const setMark = (value) => (value = playerMark);

  return {
    getName,
    getMark,
    setName,
    setMark,
  };
};

/// create game interface to store data
const gameData = function () {
  // board
  const board = new Array(9).fill(null);

  // get board value at a specific index
  const getCell = (index) => board[index];

  // set board value at a specific index
  const setCell = (index, value) => (board[index] = value);

  // get the entire board at any given time
  const getBoard = () => [...board];

  return {
    getCell,
    setCell,
    getBoard,
  };
};

const ticTacToe = gameData();

// game logic

const gameLogic = (function () {
  // create players
  const player1 = player('Player X', 'X');
  const player2 = player('Player O', 'O');

  let currentPlayer = player1;

  // switch player
  const switchPlayer = () => {
    if (currentPlayer === player1) currentPlayer = player2;
    else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  };

  // define win conditions
  let winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const checkWinner = function (winConditions) {
    // get values at board[winCondition[element]]
    function mapBoardValues(subArr) {
      const elements = subArr.map((el) => ticTacToe.getCell(el));

      // test for equality
      const check = elements.every(
        (el, i) => typeof el === 'string' && elements[i] === elements[0]
      );

      return check;
    }

    // check if the condition is met in any sub array
    const isWinner = winConditions.some((subArr) => mapBoardValues(subArr));

    return isWinner;
  };

  // display overlay / winner
  const displayWinner = (value) => {
    overlay.classList.remove('hidden');
    winnerDiv.classList.remove('hidden');
    messageWinner.textContent = value;
  };

  // hide overlay / winner
  const newGame = (element) => {
    clear();
    overlay.classList.add('hidden');
    winnerDiv.classList.add('hidden');
  };

  // clear the board and the dom
  const clear = function () {
    currentPlayer = player1;
    ticTacToe.getBoard().forEach((el, i) => ticTacToe.setCell(i, null));
    cells.forEach((c) => (c.textContent = ''));
    message.textContent = `Player X's turn`;
  };

  // attach event listeners to each div
  cells.forEach((cell, i) =>
    cell.addEventListener('click', function (e) {
      message.textContent =
        currentPlayer.getName() === 'Player X'
          ? `Player O's turn`
          : `Player X's turn`;

      // on click push player.getMark on board[i]
      if (ticTacToe.getCell(i) === null) {
        ticTacToe.setCell(i, currentPlayer.getMark());

        // set the value in the DOM
        e.target.textContent = currentPlayer.getMark();

        //check for winner
        if (checkWinner(winConditions)) {
          displayWinner(`${currentPlayer.getName()} wins!`);
          clear();
          return;
        }

        // switch player
        switchPlayer();
      }

      // check for draw
      if (ticTacToe.getBoard().every((el) => typeof el === 'string')) {
        displayWinner("It's a draw!");
        clear();
      }
    })
  );

  playAgain.addEventListener('click', newGame);

  return {
    clear,
  };
})();

// reset game
btnClear.addEventListener('click', gameLogic.clear);
