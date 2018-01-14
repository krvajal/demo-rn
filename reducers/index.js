import { combineReducers } from "redux";
import order, * as fromOrder from "./order";
import products from "./products";

const app = combineReducers({ order, products });

export function getAdditionalCount(state, id) {
  return fromOrder.getAdditionalCount(state.order, id);
}
export function getTotalAmount(state) {
  return state.order.additionals.allIds.reduce((accumAmount, id) => {
    const prod = state.order.additionals.byId[id];
    return accumAmount + prod.count;
  }, 0);
}
export default app;
