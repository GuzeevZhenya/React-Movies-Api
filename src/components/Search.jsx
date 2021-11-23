import React, { useState,useEffect } from "react";

export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.searchMovies(search);
    }
  };

  const handleFilter = (event) => {
      setType(event.target.dataset.type);
      props.searchMovies(search, type);
    };


  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            placeholder="search"
            className="validate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => handleKey(e)}
          />
          <button className="btn" onClick={(e) => props.searchMovies(search,type)}>
            Search
          </button>
        </div>
      </div>
      <div>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="all"
                          onChange={(e) => handleFilter(e)}
                          checked={type === 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
                          onChange={(e) => handleFilter(e)}
                          checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="series"
                          onChange={(e) => handleFilter(e)}
                          checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
};
