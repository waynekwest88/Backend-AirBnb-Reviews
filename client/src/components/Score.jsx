import React from 'react';

const Score = ({
  accuracy,
  communication,
  value,
  location,
  cleaniness,
  checkin
}) => {
  return (
    <span>
      <span style={{ display: 'inline-block' }}>
        <span>
          accuracy: {accuracy}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
        <span>
          communication: {communication}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
        <span>
          value: {value}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
        <span>
          location: {location}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
        <span>
          cleaniness: {cleaniness}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
        <span>
          checkin: {checkin}
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </span>
      </span>
    </span>
  );
};

export default Score;
