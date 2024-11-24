
import React, { useState } from 'react'
import './TicTacToe.css'
function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
setIsXNext(true)
    }
    const getStatusMessage = () => {
const winner=calculateWinner(board)
if(winner) return `Player ${winner} wins`
if(!board.includes(null)) return "it's a draw"
return `player ${isXNext?"X":"O"} turn`
}
    const handleClick = (index) => {
        if (calculateWinner(board) || board[index]) {
            return
        }
        const newBoard = [...board]
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }
    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const calculateWinner = (currentBoard) => {
        for (let [a, b, c] of WINNING_PATTERNS) {
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c])
                return currentBoard[a]
        }
        return null;
    }
    return (
        <div className="game">
            <div className='status'>
                <p className={`${calculateWinner(board)?'text-message-win':'text-message'}`}>
                    {getStatusMessage()}
                </p>
                <button onClick={()=>resetGame()}>
                    Reset
                </button>
            </div>
            <div className='board'>
                {board.map((cell, index) => (
                    <button key={index} className='cell' onClick={()=>handleClick(index)}>
                        {cell}
                    </button>
                ))
                }
            </div>
        </div>
    );
}

export default TicTacToe;
