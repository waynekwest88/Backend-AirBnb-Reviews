import React from "react";

const TotalReview = ({totalReviews}) => {
  var divStyle = {
    color: "purple",
    display: "inline-block",
    width: "100%",
    float: "left",
    'fontFamily': "Times New Roman",
    'fontSize': '25px'
  };

  return (
    <div id="staticReviewDiv" style={divStyle}>
      <h6>Total Reviews: {totalReviews}</h6>
      <input placeholder="Search Reviews"/>
    </div>
  );
};

export default TotalReview;
