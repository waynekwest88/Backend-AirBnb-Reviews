import React from 'react';

const SearchPage = ({ clearSearch, queryString, numberOfResults }) => {
  if (numberOfResults === 0) {
    return (
      <div className="container-searchSummary">
        <div className="row justify-content-between summaryText">
          <div className="col-s-2 searchResultsSummary">
            None of our guests have mentioned{' '}
            <span className="params">&quot;{queryString}&quot;</span>
          </div>
          <div className="col-s-2">
            <span
              className="backToReviews"
              onClick={() => clearSearch()}
              onKeyUp={() => clearSearch()}
              role="button"
              tabIndex="0"
            >
              Back to all reviews
            </span>
          </div>
        </div>
      </div>
    );
  } else if (numberOfResults === 1) {
    return (
      <div className="container-searchSummary">
        <div className="row justify-content-between summaryText">
          <div className="col-s-2 searchResultsSummary">
            {numberOfResults} guest has mentioned
            <span className="params"> &quot;{queryString}&quot;</span>
          </div>
          <div className="col-s-2">
            <span
              className="backToReviews"
              onClick={() => clearSearch()}
              onKeyUp={() => clearSearch()}
              role="button"
              tabIndex="0"
            >
              Back to all reviews
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-searchSummary">
      <div className="row justify-content-between summaryText">
        <div className="col-s-2 searchResultsSummary">
          {numberOfResults} guests have mentioned
          <span className="params"> &quot;{queryString}&quot;</span>
        </div>
        <div className="col-s-2">
          <span
            className="backToReviews"
            onClick={() => clearSearch()}
            onKeyUp={() => clearSearch()}
            role="button"
            tabIndex="0"
          >
            Back to all reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
