import React from 'react';

const IndividualReview = ({ username, image, reviewDate, message }) => {
  console.log('indidivual review', image);
  return (
  <div className="container review">
    <div className="container user">
      <div className="row">
        <div className="col-s-2">
          <img className="profilePhoto" src={image} alt="user" />
        </div>
        <div className="col">
          <div className="row">
            <span className="username">{username}</span>
          </div>
          <div className="row">
            <span className="reviewDate">{reviewDate}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text">{message}</div>
  </div>
  )
};

export default IndividualReview;
