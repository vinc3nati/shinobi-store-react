import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useData } from "../../contexts/data-context";
import { useOnClickOutside } from "../../hooks/OnClickOutside";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const searchBarRef = useRef();
  const navigate = useNavigate();
  const {
    state: {
      filters: { categories },
    },
  } = useData();
  const searchKeyWords = Object.keys(categories);

  const searchSubmit = () => {
    if (searchQuery !== "") {
      navigate(`/search?searchQuery=${encodeURIComponent(searchQuery)}`);
      setActiveSearch(false);
      setSearchQuery("");
    }
  };

  const searchedOptions = searchKeyWords
    .map((item) => {
      if (item.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return (
          <li
            className="search-item"
            key={item}
            onClick={() => {
              navigate(`/search?searchQuery=${encodeURIComponent(item)}`);
              setActiveSearch(false);
              setSearchQuery("");
            }}
          >
            {item}
          </li>
        );
      }
    })
    .filter((item) => item !== undefined);

  useOnClickOutside(searchBarRef, () => setActiveSearch(false));

  return (
    <div className="search-bar" ref={searchBarRef}>
      <button type="submit" className="btn tertiary" onClick={searchSubmit}>
        <FaSearch />
      </button>
      <div className="input-grp">
        <input
          type="text"
          onFocus={() => setActiveSearch(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              searchSubmit();
            }
          }}
          placeholder="Search Products"
        />
      </div>
      {searchQuery !== "" && (
        <button className="btn tertiary" onClick={() => setSearchQuery("")}>
          <FaTimes />
        </button>
      )}
      {searchQuery !== "" && (
        <ul
          style={{ display: activeSearch ? "block" : "none" }}
          className="search-list"
        >
          {searchedOptions.length !== 0 ? (
            searchedOptions
          ) : (
            <li className="search-item">No results found for: {searchQuery}</li>
          )}
        </ul>
      )}
    </div>
  );
};
