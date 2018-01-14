import IcecreamBasket from "../components/IcecreamBasket";

const icecreams = (
  state = {
    "1000": [],
    "500": [],
    "250": []
  },
  action
) => {
  switch (action.type) {
    case "ADD_ICECREAM":
      return { ...state, [action.size]: [...state[action.size], {}] };
    case "REMOVE_ICECREAM":
      return { ...state, [action.size]: state[action.size].slice(1) };
    default:
      return state;
  }
};

export default icecreams;
