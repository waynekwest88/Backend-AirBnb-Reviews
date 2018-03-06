import React from 'react';
import ReactStars from 'react-stars';

const IndividualRating = props => {
  const roundedStars = Math.round(props.rating * 2) / 2;

  return (
    <div className="subrating">
      {props.category}{' '}
      <ReactStars
        count={5}
        edit={false}
        half
        value={roundedStars}
        size={20}
        color1="#D8D8D8"
        color2="#2cb5b4"
      />
    </div>
  );
};

export default IndividualRating;
