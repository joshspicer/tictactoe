package main

var board [3][3]int

func PrintBoard() {
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			print(board[i][j])
		}
		println()
	}
}

// TODO: Implement the rest of the game