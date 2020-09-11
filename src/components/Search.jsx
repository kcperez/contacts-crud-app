import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.setSearchTerm(search);
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search Contacts"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
