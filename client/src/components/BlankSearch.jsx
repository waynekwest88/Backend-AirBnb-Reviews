import React from 'react';

const BlankSearch = props => {
  return (
    <div>
      <h1>No result for "{props.searchTerm}"</h1>
      <button onClick={() => props.clearSearch()}>Back to all reviews</button>
    </div>
  );
};

export default BlankSearch;
