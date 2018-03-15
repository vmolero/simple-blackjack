import Board from './../Board';

test('A Board is serialized', () => {
    const board: Board = Board.newGame();
    const jsonBoard: string = JSON.stringify(board);
    return expect(JSON.parse(jsonBoard, Board.reviver)).toEqual(board);
});