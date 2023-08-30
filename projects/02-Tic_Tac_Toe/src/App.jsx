import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { Turns } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board')
		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ?? Turns.X
	})

	const [winner, setWinner] = useState(null)

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(Turns.X)
		setWinner(null)

		resetGameStorage()
	}

	const updateBoard = (index) => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === Turns.X ? Turns.O : Turns.X
		setTurn(newTurn)

		saveGameToStorage({
			board: newBoard,
			turn: newTurn,
		})

		const newWinner = checkWinnerFrom(newBoard)
		if (newWinner) {
			confetti()
			setWinner(newWinner)
		} else if (checkEndGame(newBoard)) {
			setWinner(false)
		}
	}

	return (
		<main className='board'>
			<h1>Tic Tac Toe</h1>
			<button onClick={resetGame}>Reset</button>
			<section className='game'>
				{board.map((square, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{board[index]}
						</Square>
					)
				})}
			</section>

			<section className='turn'>
				<Square isSelected={turn === Turns.X}>{Turns.X}</Square>
				<Square isSelected={turn === Turns.O}>{Turns.O}</Square>
			</section>

			<WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	)
}

export default App
