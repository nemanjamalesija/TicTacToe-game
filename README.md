# TicTacToe-game

Part of The Odin Project curiculum. The goal was to study and use factory functions, together with the module pattern.

I separated functionalities of my applications in 3 big pieces:

First, factory functions for creating players, that returns player mark and player name, which I can later use to set player's mark on a specific index of the board array.

Second, factory function to store game data. In this function I define the board, which is an empty array, and define functions that will return the state of the array at any given time, as well as function that will set player's mark at a specific index, by working together with player function.

Finally, a module patter, IIFE in which the logic of the app resides. In this function I also defined an array of win conditions (which is hard coded), and later I compare the winning patterns with the state of the array.

The most challenging part of this project was learning to first store the data in the board array, and only then display it in the DOM. This way of thinking was counter-intuitive for me, as I saw it more natural to always first see the data on the screen.

I learned that a good way of dealing with this is making the logic work in the console first. By doing this, we can see the data that we are working with, and once we advanced in completing our logic, we can start working towards displaying it in the DOM.
