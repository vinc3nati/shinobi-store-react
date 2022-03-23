import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import { getProducts, getCategories } from "../utilities/API_REQUESTS";
import { reducer, defaultValue } from "../utilities/reducer";
import { ACTIONS } from "../utilities/constant";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const [loader, setLoader] = useState(false);
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
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch, loader, setLoader }}>
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
