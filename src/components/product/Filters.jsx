import React, { useState } from "react";
import { useData } from "../../contexts/data-context";
import { ACTIONS, FILTERS, SortBy } from "../../utilities/constant";

const ratings = ["4", "3", "2", "1"];

export const Filters = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { state, dispatch } = useData();
  const maxValue = state.products.reduce(
    (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
    0
  );
  return (
    <aside
      className={openFilter ? "product-aside filter-open" : "product-aside"}
    >
      <div className="aside-heading">
        <header
          className="aside-header"
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          {openFilter ? "apply" : "filters"}
        </header>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: ACTIONS.Clear });
            setOpenFilter(false);
          }}
        >
          Clear All
        </span>
      </div>
      <div className="filter-section">
        <div className="filter">
          <div className="filter-heading">Sort</div>
          {Object.values(SortBy).map((price) => (
            <div className="radio-grp" key={price}>
              <input
                type="radio"
                name="price-radio"
                id={price + "-radio"}
                value={price}
                checked={state.filters.sortBy === price ? true : false}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.ChangeFilters,
                    payload: {
                      type: FILTERS.SortBy,
                      value: price,
                    },
                  })
                }
              />
              <label htmlFor={price + "-radio"}>
                <span className="radio-btn"></span>
                <span>Price {price}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="filter">
          <div className="filter-heading">Price Slider</div>
          <div className="slider-label">
            <p>300</p>
            <p>6000+</p>
          </div>
          <input
            type="range"
            name="priceRange"
            className="slider"
            min="300"
            max={maxValue}
            value={state.filters.priceRange}
            onChange={(e) =>
              dispatch({
                type: ACTIONS.ChangeFilters,
                payload: {
                  type: FILTERS.PriceRange,
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="filter">
          <div className="filter-heading">Categories</div>
          {Object.keys(state.filters.categories).map((category) => (
            <div className="checkbox-grp" key={category}>
              <input
                type="checkbox"
                checked={state.filters.categories[category]}
                id={category + "-checkbox"}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.ChangeFilters,
                    payload: {
                      type: FILTERS.Categories,
                      value: {
                        ...state.filters.categories,
                        [category]: !state.filters.categories[category],
                      },
                    },
                  })
                }
              />
              <label htmlFor={category + "-checkbox"}>{category}</label>
            </div>
          ))}
        </div>
        <div className="filter">
          <div className="filter-heading">Rating</div>
          {ratings.map((rate) => (
            <div className="radio-grp" key={rate}>
              <input
                type="radio"
                name="rating"
                id={rate + "star"}
                value={rate}
                checked={state.filters.rating === rate ? true : false}
                onChange={() =>
                  dispatch({
                    type: ACTIONS.ChangeFilters,
                    payload: { type: FILTERS.Rating, value: rate },
                  })
                }
              />
              <label htmlFor={rate + "star"}>
                <span className="radio-btn"></span>
                <span>{rate + "stars & above"}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
