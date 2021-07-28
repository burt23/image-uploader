import React, { useState } from "react";
const SearchInput = () => {
  const [searchTerms, setSearchTerms] = useState();

  const handleSearchTerms = (e) => {
    const { target: { value } = { target: { value: "" } } } = e;
    setSearchTerms(value);
  };

  const handleQuery = (e) => {
    if (e.key === "Enter") {
      alert("user hit enter", e);
      // query postgres
    }
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
        onKeyPress={handleQuery}
      />
    </div>
  );
};

export default SearchInput;
