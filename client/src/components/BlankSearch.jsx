import React from 'react';
import $ from 'jquery';

const BlankSearch = ({ searchReviews }) => {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search reviews"
        onKeyUp={event => {
          if (event.keyCode === 13) {
            searchReviews($(event.target).val());
          }
        }}
      />
    </div>
  );
};

export default BlankSearch;
