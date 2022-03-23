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
        cart: state.cart.concat(action.payload.cartItem),
        products: state.products.map((item) =>
          action.payload.cartItem._id === item._id
            ? { ...item, addedToCart: !state.products.find(item).addedToCart }
            : item
        ),
      };

    case ACTIONS.SetWishlist:
      return {
        ...state,
        wishlist: state.wishlist.concat(action.payload.wishlistItem),
        products: state.products.map((item) =>
          action.payload.wishlistItem._id === item._id
            ? {
                ...item,
                addedToWishlist: !state.products.find(item).addedToWishlist,
              }
            : item
        ),
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
