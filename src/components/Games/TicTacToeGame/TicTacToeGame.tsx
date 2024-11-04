import { useState } from "react";

export default function TicTacToeGame() {
  const winningStates = [
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(Array(9).fill(null));

  const computeBoard = (i: number) => {
    if (board[i] || winner) return; // Prevent move if the cell is occupied or there's a winner

    const newBoard = board.slice(); // Create a shallow copy of the board
    newBoard[i] = player;
    setBoard(newBoard);

    // Check for a winner
    if (checkForWinner(newBoard)) {
      setWinner(`Player ${player} wins!`);
    } else {
      // Toggle the player
      setPlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
    }
  };

  const checkForWinner = (newBoard: string[]) => {
    return winningStates.some(
      ([a, b, c]) =>
        newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]
    );
  };

  return (
    <div className="w-100 gap-3 m-auto w-full h-full items-center justify-center flex flex-col">
      <div className="w-100 h-6 text-black">{winner}</div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((box: any, i: number) => (
          <button
            onClick={() => computeBoard(i)}
            className="gap-3 w-32 h-32 bg-black text-white text-[40px]"
            key={i}
          >
            {box}
          </button>
        ))}
      </div>
    </div>
  );
}
