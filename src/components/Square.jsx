import React, { memo } from 'react';

const Square = props => {
  const { value, index, onClick } = props;  

  return (
    <button className="square" onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

export default memo(Square);