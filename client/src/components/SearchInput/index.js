import React, { useEffect, useState } from "react";
import { SEARCH } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";

const SearchInput = ({ setImages }) => {
  const [searchTerms, setSearchTerms] = useState();
  const [search, { loading, data = false }] = useLazyQuery(SEARCH);

  useEffect(() => {
    const { search = false } = data;
    if (search) {
      setImages(search);
    }
  }, [data, setImages]);

  const handleSearchTerms = (e) => {
    const { target: { value } = { target: { value: "" } } } = e;
    setSearchTerms(value);
  };

  const handleQuery = async (e) => {
    if (e.key === "Enter") {
      search({ variables: { terms: searchTerms } });
    }
  };

  if (loading) return <p>Searching...</p>;

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
