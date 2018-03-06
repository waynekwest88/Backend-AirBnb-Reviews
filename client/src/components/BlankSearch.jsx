import React from 'react';
import MdSearch from 'react-icons/lib/md/search';
import $ from 'jquery';

const BlankSearch = ({ search }) => {
  return (
    <div className="searchingInput">
      <input
        className="searchInput"
        type="text"
        placeholder="Search Name"
        onKeyUp={event => {
          if (event.keyCode === 13) {
            search($(event.target).val());
            console.log($(event.target).val());
          }
        }}
      >
      </input>
    </div>
  );
};

export default BlankSearch;
