const additional = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "ADD_ADDITIONAL":
      return { ...state, id: action.id, count: state.count + 1 };
    case "REMOVE_ADDITIONAL":
      return { ...state, id: action.id, count: Math.max(state.count - 1, 0) };
    default:
      return { ...state, id: action.id };
  }
};

export default additional;
