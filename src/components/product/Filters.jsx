import React from "react";
import { useData } from "../../contexts/product-context";
import { ACTIONS, FILTERS, SortBy } from "../../utilities/constant";

const ratings = ["4", "3", "2", "1"];

export const Filters = () => {
  const { state, dispatch } = useData();
  const maxValue = state.products.reduce(
    (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
    0
  );
  return (
    <aside className="product-aside">
      <div className="aside-heading">
        <header className="aside-header">Filter</header>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: ACTIONS.Clear })}
        >
          Clear All
        </span>
      </div>
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
            <label for={price + "-radio"}>
              <span className="radio-btn"></span>
              Price {price}
            </label>
          </div>
        ))}
      </div>
      <div className="filter">
        <div className="filter-heading">Price Slider</div>
        <input
          type="range"
          name="priceRange"
          className="slider"
          min="0"
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
            <label for={category + "-checkbox"}>{category}</label>
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
            <label for={rate + "star"}>
              <span className="radio-btn"></span>
              {rate + "stars & above"}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};
