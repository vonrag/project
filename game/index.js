// const startBoard = Game.createRandomBoard();
const startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'empty', 15];
const game = new Game({
    board: startBoard,
    container: document.querySelector('.board')
});

console.log( startBoard );
console.log( game );
