import React from 'react';

const SearchBox = (props) => {
  const { searchChange } = props;

  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
