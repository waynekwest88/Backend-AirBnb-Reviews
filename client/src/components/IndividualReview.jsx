import React from 'react';

const IndividualReview = props => (
  <div className="container review">
    <div className="container user">
      <div className="row">
        <div className="col-s-2">
          <img
            className="profilePhoto"
            src={props.review.image}
            alt="user"
          />
        </div>
        <div className="col">
          <div className="row">
            <span className="username">{props.review.guest_name}</span>
          </div>
          <div className="row">
            <span className="reviewDate">{props.review.date}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text">{props.review.message}</div>
  </div>
);

export default IndividualReview;
