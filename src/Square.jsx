export const Square = (props) => {
  const { squareState, number, onClickSquare } = props;
  return (
    <button className="square" onClick={() => onClickSquare(number)}>
      {squareState[number]}
    </button>
  );
};
