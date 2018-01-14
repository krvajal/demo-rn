import { combineReducers } from "redux";
import icecreams from "./icecreams";
import additionals, * as fromAdditionals from "./additionals";

const order = combineReducers({ icecreams, additionals });

export function getAdditionalCount(state, id) {
  return fromAdditionals.getAdditionalCount(state.additionals, id);
}

export default order;
