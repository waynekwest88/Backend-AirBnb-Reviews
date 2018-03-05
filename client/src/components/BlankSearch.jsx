import React from 'react';
import $ from 'jquery';

const BlankSearch = props => {
  const clear = () => {
    $(':input').removeAttr('value');
  } 
  return (
    <div>
      <h1>No result for "{props.searchTerm}"</h1>
      <button
        onClick={() => {
          props.clearSearch();
          clear();
        }}
      >
        Back to all reviews
      </button>
    </div>
  );
};

export default BlankSearch;
