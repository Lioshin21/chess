import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import GameOver from "./GameOver";

interface TimerProps {
  currentPlayer: Player;
  restart: () => void;
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(10);
  const [whiteTime, setWhiteTime] = useState(10);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  useEffect(() => {}, [blackTime, whiteTime]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const counter = () => {
      currentPlayer.color === Colors.WHITE
        ? setWhiteTime((prev) => prev - 1)
        : setBlackTime((prev) => prev - 1);
    };

    timer.current = setInterval(counter, 1000);
  }

  const handleRestart = () => {
    setWhiteTime(10);
    setBlackTime(10);
    restart();
  };

  return (
    <div className="timer">
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      {blackTime < 0 || whiteTime < 0 ? (
        <GameOver currentPlayer={currentPlayer} />
      ) : (
        <>
          <h2>
            Black: <p>{blackTime}</p>
          </h2>
          <h2>
            White: <p>{whiteTime}</p>
          </h2>
        </>
      )}
      {/* {if(blackTime < 0 || whiteTime < 0) {
        <GameOver currentPlayer={currentPlayer}/>
    }
    
      } */}
    </div>
  );
};

export default Timer;
