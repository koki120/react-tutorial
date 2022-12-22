import { Square } from "./Square";
import { useState } from "react";
import "./styles.css";

export const Board = () => {
  const [squareState, setSquareState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const [playerIsO, setPlayerIsO] = useState(true);

  let winner = calculateWinner(squareState);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Now player: " + (playerIsO ? "O" : "X");
  }

  const onClickSquare = (num) => {
    if (squareState[num] || calculateWinner(squareState)) return;
    //勝者または値が存在するなら処理をしない
    const newSquareState = squareState.slice();
    //squareStateをコピー
    newSquareState[num] = playerIsO ? "O" : "X";
    //playerIsOがtrueなら"O"を返す。
    setSquareState(newSquareState);
    //squareStateの状態を更新
    setPlayerIsO(!playerIsO);
    //playerIsOの状態を更新
  };

  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          squareState={squareState}
          number={0}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={1}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={2}
          onClickSquare={onClickSquare}
        />
      </div>
      <div className="board-row">
        <Square
          squareState={squareState}
          number={3}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={4}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={5}
          onClickSquare={onClickSquare}
        />
      </div>
      <div className="board-row">
        <Square
          squareState={squareState}
          number={6}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={7}
          onClickSquare={onClickSquare}
        />
        <Square
          squareState={squareState}
          number={8}
          onClickSquare={onClickSquare}
        />
      </div>
    </div>
  );
};

//勝利判定の関数　理解しなくてもよい

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
