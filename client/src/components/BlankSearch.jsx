import React from 'react';
import $ from 'jquery';

const BlankSearch = ({ search }) => {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search reviews"
        onKeyUp={event => {
          if (event.keyCode === 13) {
            search($(event.target).val());
            console.log($(event.target).val())
          }
        }}
      />
    </div>
  );
};

export default BlankSearch;
