import { ACTIONS } from "./constant";

export const defaultValue = {
  products: [],
  wishlist: [],
  cart: [],
  filters: {
    sortBy: "",
    categories: {},
    search: "",
    priceRange: 10000,
    rating: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GetProducts:
      return {
        ...state,
        products: action.payload.products.map((item) => ({
          ...item,
          addedToCart: false,
          addedToWishlist: false,
        })),
      };

    case ACTIONS.GetCategories:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: action.payload.categories.reduce(
            (acc, curr) => ({ ...acc, [curr.categoryName]: false }),
            {}
          ),
        },
      };

    case ACTIONS.ChangeFilters:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.value,
        },
      };

    case ACTIONS.SetCart:
      return {
        ...state,
        cart: [...action.payload.cart],
        products: state.products.map((item) => {
          return {
            ...item,
            addedToCart: action.payload.cart.some((it) => it._id === item._id),
          };
        }),
      };

    case ACTIONS.SetWishlist:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        products: state.products.map((item) => {
          return {
            ...item,
            addedToWishlist: action.payload.wishlist.some(
              (it) => it._id === item._id
            ),
          };
        }),
      };
    case ACTIONS.Clear:
      return {
        ...state,
        filters: {
          ...defaultValue.filters,
          categories: Object.keys(state.filters.categories).reduce(
            (acc, curr) => ({ ...acc, [curr]: false }),
            {}
          ),
        },
      };

    default:
      return state;
  }
};
