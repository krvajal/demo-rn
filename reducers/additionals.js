import uniq from "lodash/uniq";
import { combineReducers } from "redux";
import additional from "./additional";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ADDITIONAL":
    case "REMOVE_ADDITIONAL":
      return {
        ...state,
        [action.id]: additional(state[action.id], action)
      };
    default:
      return state;
  }
};
const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_ADDITIONAL":
      return uniq([...state, action.id]);
    default:
      return state;
  }
};
export function getAdditionalCount(state, id) {
  if (state.byId[id]) {
    return state.byId[id].count;
  }
  return 0;
}
const additionals = combineReducers({ byId, allIds });

export default additionals;
