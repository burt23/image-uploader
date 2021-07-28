import React, { useState } from "react";
const SearchInput = () => {
  const [searchTerms, setSearchTerms] = useState();
  const handleSearchTerms = (e) => {
    const { target: { value } = { target: { value: "" } } } = e;
    if (!value) return null;
    setSearchTerms(value);
  };
  return (
    <div className="flexItem">
      <h2>Search</h2>
      <input
        type="input"
        id="searchInputBox"
        value={searchTerms}
        data-testid="searchInput"
        onChange={handleSearchTerms}
      />
    </div>
  );
};

export default SearchInput;
