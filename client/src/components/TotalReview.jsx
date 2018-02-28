import React from "react";

const TotalReview = () => {
  var divStyle = {
    color: "purple",
    display: "inline-block",
    width: "45%",
    float: "left",
    'fontFamily': "Times New Roman",
    'fontSize': '25px'
  };

  return (
    <div id="staticReviewDiv" style={divStyle}>
      <h6>Total Reviews: 200</h6>
    </div>
  );
};

export default TotalReview;
