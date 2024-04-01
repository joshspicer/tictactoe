class TicTacToe {
    private board: string[][];
    private currentPlayer: string;

    constructor() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.currentPlayer = "X";
    }

    public printBoard(): void {
        for (let row = 0; row < 3; row++) {
            let rowString = "";
            for (let col = 0; col < 3; col++) {
                rowString += this.board[row][col] + " ";
            }
            console.log(rowString.trim());
        }
    }

    // TODO: Implement the rest
}