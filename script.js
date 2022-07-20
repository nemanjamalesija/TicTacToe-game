// selectors
const cells = document.querySelectorAll('.grid__element');

// function create Player
const player = (playerName, playerMark) => {
  // get name, get mark
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
const gameData = () => {
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
