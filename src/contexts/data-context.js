import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import {
  getProducts,
  getCategories,
  getCart,
  getWishlist,
  deleteCartAll,
} from "../utilities/API_REQUESTS";
import { reducer, defaultValue } from "../utilities/reducer";
import { ACTIONS } from "../utilities/constant";
import { useAuth } from "./auth-context";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const prodResponse = await getProducts();
        if (prodResponse.data.products) {
          setLoader(false);
          dispatch({
            type: ACTIONS.GetProducts,
            payload: { products: prodResponse.data.products },
          });
        }

        const categoriesResponse = await getCategories();
        if (categoriesResponse.data.categories) {
          dispatch({
            type: ACTIONS.GetCategories,
            payload: { categories: categoriesResponse.data.categories },
          });
        }

        if (user.token) {
          const cartResponse = await getCart({ token: user.token });
          if (cartResponse.data.cart) {
            dispatch({
              type: ACTIONS.SetCart,
              payload: { cart: cartResponse.data.cart },
            });
          }
          const wishlistResponse = await getWishlist({ token: user.token });
          if (wishlistResponse.data.wishlist) {
            dispatch({
              type: ACTIONS.SetWishlist,
              payload: { wishlist: wishlistResponse.data.wishlist },
            });
          }

          setLoader(false);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [user.token]);

  const handleOrders = async (tempObj) => {
    dispatch({
      type: ACTIONS.SetOrder,
      payload: { orders: tempObj },
    });
    try {
      await deleteCartAll({ token: user.token });
      dispatch({
        type: ACTIONS.SetCart,
        payload: { cart: [] },
      });
      navigate("/profile/orders");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DataContext.Provider
      value={{ state, dispatch, loader, setLoader, handleOrders }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("Error creating Data context");
  return context;
};

export { useData, DataProvider };
