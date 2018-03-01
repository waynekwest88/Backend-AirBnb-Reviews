import React from "react";

const Score = ({
  accuracy,
  communication,
  value,
  location,
  cleaniness,
  checkin
}) => {
  return <span>
    <span style={{display: 'inline-block'}}>
        <span>accuracy: {accuracy}</span>
        <span>communication: {communication}</span>
        <span>value: {value}</span>
        <span>location: {location}</span>
        <span>cleaniness: {cleaniness}</span>
        <span>checkin: {checkin}</span>
      </span>
  </span>;
};

export default Score;
