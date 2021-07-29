import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { CODReducer } from "./CODReducer";
import { couponReducer } from "./couponReducer";
import { drawerReducer } from "./drawerReducer";
import { searchReducer } from "./searchReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
  COD: CODReducer
});

export default rootReducer;