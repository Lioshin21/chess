import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState<Player>(new Player(Colors.WHITE));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    restart();
    console.log('blackFigures', board.lostBlackFigures, 'whiteFigures', board.lostWhiteFigures)
  }, []);

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer.color === Colors.WHITE ? new Player(Colors.BLACK) : new Player(Colors.WHITE)
    );
  }

  function restart() {
    setCurrentPlayer(new Player(Colors.WHITE))
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart}/>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;
