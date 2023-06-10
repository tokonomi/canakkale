import getImagesReducer from "./get_images_reducer";
import { combineReducers } from "redux";
import productListReducer from "./product_list_reducer";
import limitiReducer from "./limit_reducer";
import getPortfolioReducer from "./get_portfolio_reducer";
import intervalReducer from "./intervalReducer";

const reducers = combineReducers({
    images: getImagesReducer,
    products: productListReducer,
    limit: limitiReducer,
    portfolio: getPortfolioReducer,
    interval: intervalReducer
})

export default reducers;