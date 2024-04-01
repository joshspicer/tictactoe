class TicTacToeSolver:
    def __init__(self):
        self.board = [[' ' for _ in range(3)] for _ in range(3)]

    def print_board(self):
        for row in self.board:
            print('|'.join(row))
            print('-' * 5)

    # TODO: Implement the rest of the game