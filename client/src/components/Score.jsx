import React from 'react';
import IndividualRating from './IndividualRating';

const Score = props => (
  <div>
    <IndividualRating category="Accuracy" rating={props.accuracy} />
    <IndividualRating category="Check In" rating={props.checkIn} />
    <IndividualRating category="Cleanliness" rating={props.cleanliness} />
    <IndividualRating category="Communication" rating={props.communication} />
    <IndividualRating category="Location" rating={props.location} />
    <IndividualRating category="Value" rating={props.value} />

  </div>
);


export default Score;
