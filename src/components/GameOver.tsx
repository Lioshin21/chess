import React, { FC } from "react";
import { Player } from "../models/Player";

interface GameOverProps {
  currentPlayer: Player;
}

const GameOver: FC<GameOverProps> = ({ currentPlayer }) => {
  return <div>{currentPlayer.color} lost</div>;
};

export default GameOver;
