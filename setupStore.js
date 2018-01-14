import { createStore, applyMiddleware } from "redux";
import app from "./reducers";
import logger from "redux-logger";

const setupStore = () => {
  const store = createStore(app, applyMiddleware(logger));
  return store;
};

export default setupStore;
