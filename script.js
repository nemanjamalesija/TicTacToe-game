// selectors
const fields = document.querySelector('.grid__element');

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
